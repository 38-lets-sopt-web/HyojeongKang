import { useState, useEffect, useRef } from 'react';
import Modal from '../../../../components/Modal/Modal';
import { LEVEL_CONFIG } from '../../constants/levelConfig';
import { saveRanking } from '../../../../utils/storage';
import * as S from './GameBoard.styles';
import successImg from '../../../../assets/success.png';
import failImg from '../../../../assets/fail.png';
import foundImg from '../../../../assets/found.png';

const createMoles = (count) =>
    Array.from({ length: count }, () => ({
        id: crypto.randomUUID(),
        type: 'hidden',
        isVisible: false,
    }));

export default function GameBoard({
    level, isPlaying, isGameOver,
    onLevelChange, onStart, onStop,
    score, setScore, setSuccessCount, setFailCount, setMessage,
}) {
    const [moles, setMoles] = useState(() => createMoles(LEVEL_CONFIG[level].count));
    const moleTimers = useRef([]);

    // 모달
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalCountdown, setModalCountdown] = useState(3);

    // 레벨 변경 or 게임 중단 시 moles 초기화
    useEffect(() => {
        setMoles(createMoles(LEVEL_CONFIG[level].count));
    }, [level]);

    // 게임 종료 시 두더지 숨기기 + 랭킹 저장 + 모달
    useEffect(() => {
        if (isPlaying) return;
        setMoles(prev => prev.map(m => ({ ...m, isVisible: false })));
    }, [isPlaying]);

    // 두더지 등장 인터벌
    const showRandomMoleRef = useRef(null);
    showRandomMoleRef.current = () => {
        const { count } = LEVEL_CONFIG[level];
        const index = Math.floor(Math.random() * count);
        const type = Math.random() < 0.7 ? 'success' : 'fail';

        setMoles(prev => {
            if (prev[index].isVisible) return prev;
            return prev.map((m, i) => i === index ? { ...m, type, isVisible: true } : m);
        });

        const timer = setTimeout(() => {
            setMoles(prev => {
                if (prev[index].type === 'found') return prev;
                return prev.map((m, i) => i === index ? { ...m, isVisible: false } : m);
            });
        }, 800);

        moleTimers.current.push(timer);
    };

    useEffect(() => {
        if (!isPlaying) return;
        const interval = setInterval(() => showRandomMoleRef.current(), 1000);
        return () => {
            clearInterval(interval);
            moleTimers.current.forEach(t => clearTimeout(t));
            moleTimers.current = [];
        };
    }, [isPlaying]);

    // 두더지 클릭
    const handleMoleClick = (index) => {
        const mole = moles[index];
        if (!mole.isVisible) return;

        if (mole.type === 'success') {
            setScore(prev => prev + 1);
            setSuccessCount(prev => prev + 1);
            setMessage('플러시를 잡았다!');
            setMoles(prev => prev.map((m, i) =>
                i === index ? { ...m, type: 'found', isVisible: true } : m
            ));
            const timer = setTimeout(() => {
                setMoles(prev => prev.map((m, i) =>
                    i === index ? { ...m, isVisible: false } : m
                ));
            }, 800);
            moleTimers.current.push(timer);
        } else {
            setScore(prev => prev - 1);
            setFailCount(prev => prev + 1);
            setMessage('땡! 마이농이지롱');
            setMoles(prev => prev.map((m, i) =>
                i === index ? { ...m, isVisible: false } : m
            ));
        }
    };

    // isGameOver 감지 → 랭킹 저장 + 모달
    useEffect(() => {
        if (!isGameOver) return;
        saveRanking({ level, score });
        setIsModalOpen(true);
    }, [isGameOver]);

    // 모달 자동 닫기
    useEffect(() => {
        if (!isModalOpen) return;
        setModalCountdown(3);

        const countdown = setInterval(() => setModalCountdown(prev => prev - 1), 1000);
        const close = setTimeout(() => {
            clearInterval(countdown);
            setIsModalOpen(false);
        }, 3000);

        return () => { clearInterval(countdown); clearTimeout(close); };
    }, [isModalOpen]);

    return (
        <>
            <S.GameContent>
                <S.ControlBar>
                    <S.SelectLv value={level} onChange={(e) => onLevelChange(Number(e.target.value))}>
                        {Object.entries(LEVEL_CONFIG).map(([key]) => (
                            <option key={key} value={Number(key)}>Level {key}</option>
                        ))}
                    </S.SelectLv>
                    <S.BtnGroup>
                        <S.StartButton onClick={onStart} disabled={isPlaying}>시작</S.StartButton>
                        <S.StopButton onClick={onStop} disabled={!isPlaying}>중단</S.StopButton>
                    </S.BtnGroup>
                </S.ControlBar>

                <S.MoleWrapper>
                    <S.MoleGridBox>
                        <S.MoleGrid cols={LEVEL_CONFIG[level].cols}>
                            {moles.map((mole, index) => (
                                <S.MoleCell key={mole.id} onClick={() => handleMoleClick(index)}>
                                    {mole.isVisible && (
                                        <S.MoleImg
                                            src={
                                                mole.type === 'success' ? successImg :
                                                    mole.type === 'found' ? foundImg : failImg
                                            }
                                            alt={mole.type}
                                        />
                                    )}
                                </S.MoleCell>
                            ))}
                        </S.MoleGrid>
                    </S.MoleGridBox>
                </S.MoleWrapper>
            </S.GameContent>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <S.ModalTitle>Level {level} 게임 종료!</S.ModalTitle>
                <S.ModalScore>최종 점수: {score}점</S.ModalScore>
                <S.ModalResetMessage>{modalCountdown}초 후에 게임이 리셋됩니다.</S.ModalResetMessage>
            </Modal>
        </>
    );
}