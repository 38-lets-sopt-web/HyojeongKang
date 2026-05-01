import { useState, useEffect, useRef } from 'react';
import * as S from './Game.styles.js';
import GameSidebar from './components/GameSidebar/GameSidebar.jsx';
import GameBoard from './components/GameBoard/GameBoard.jsx';
import { LEVEL_CONFIG } from './constants/levelConfig.js';

// moles 초기화 시 count 기준으로 생성
const createMoles = (count) => Array.from({ length: count }, () => ({ type: 'hidden', isVisible: false }));

export default function GamePage() {

    const [moles, setMoles] = useState(() => createMoles(LEVEL_CONFIG[1].count));
    const [score, setScore] = useState(0);
    const [successCount, setSuccessCount] = useState(0);
    const [failCount, setFailCount] = useState(0);
    const [message, setMessage] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);
    const [timeLeft, setTimeLeft] = useState(LEVEL_CONFIG[1].time);
    const moleTimers = useRef([]);  // 두더지 자동숨김 타이머 목록(cleanup)
    const [level, setLevel] = useState(1);


    const handleLevelChange = (newLevel) => {
        if (isPlaying) return;        // 이미 진행 중이면 무시
        setLevel(newLevel);
        resetGame();
    };

    // 초기화 함수
    const resetGame = (lv = level) => {
        const { count, time } = LEVEL_CONFIG[lv];
        setTimeLeft(time);
        setScore(0);
        setSuccessCount(0);
        setFailCount(0);
        setMoles(createMoles(count));
        setMessage('');
    };

    // 게임 시작
    const handleStart = () => {
        if (isPlaying) return;        // 이미 진행 중이면 무시
        resetGame();
        setIsPlaying(true);
    };

    // 게임 중단 
    const handleStop = () => {
        if (!isPlaying) return;
        resetGame();
        setIsPlaying(false);
    };

    // 랜덤 두더지 등장 함수
    const showRandomMoleRef = useRef(null);
    showRandomMoleRef.current = () => {

        const { count } = LEVEL_CONFIG[level];
        const index = Math.floor(Math.random() * count);
        const type = Math.random() < 0.7 ? 'success' : 'fail';

        setMoles(prev => {
            if (prev[index].isVisible) return prev;
            return prev.map((m, i) =>
                i === index ? { type, isVisible: true } : m
            );
        });

        // 800ms 후 자동 숨김 (클릭된 칸(found)는 건너뜀)
        const timer = setTimeout(() => {
            setMoles(prev => {
                if (prev[index].type === 'found') return prev;
                return prev.map((m, i) =>
                    i === index ? { ...m, isVisible: false } : m
                );
            });
        }, 800);

        moleTimers.current.push(timer);
    };

    // 두더지 등장 인터벌
    useEffect(() => {
        if (!isPlaying) return;

        const interval = setInterval(() => showRandomMoleRef.current(), 1000);

        // cleanup
        return () => {
            clearInterval(interval);
            moleTimers.current.forEach(t => clearTimeout(t)); // 타이머 전부 정리
            moleTimers.current = [];
        };
    }, [isPlaying]);

    // 타이머
    useEffect(() => {
        if (!isPlaying) return;

        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [isPlaying]);

    // 두더지 클릭 처리
    const handleMoleClick = (index) => {
        const mole = moles[index];

        // 안 보이는 칸 클릭 무시
        if (!mole.isVisible) return;

        if (mole.type === 'success') {
            setScore(prev => prev + 1);
            setSuccessCount(prev => prev + 1);
            setMessage('플러시를 잡았다!');

            // found 이미지로 교체 
            setMoles(prev => prev.map((m, i) =>
                i === index ? { type: 'found', isVisible: true } : m
            ));

            // 800ms 후 두더지 숨기기
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

            // 클릭한 두더지 숨기기
            setMoles(prev => prev.map((m, i) =>
                i === index ? { ...m, isVisible: false } : m
            ));
        }
    }

    // 게임 종료 
    useEffect(() => {
        if (timeLeft === 0 && !isPlaying) return; // 초기값 0 방지 & 초기 마운트 시 실행 방지
        if (timeLeft === 0) {
            setIsPlaying(false);
            setMoles(prev => prev.map(m => ({ ...m, isVisible: false })));
            setMessage('게임 종료');

            // 결과 랭킹 저장
            const newRecord = { level, score, date: new Date().toLocaleString("ko-KR", { timeZone: "UTC" }) };
            const prev = JSON.parse(localStorage.getItem('ranking') || '[]');
            const updated = [...prev, newRecord].sort((a, b) => {
                if (Number(b.level) !== Number(a.level)) return Number(b.level) - Number(a.level);
                return b.score - a.score;
            });

            localStorage.setItem('ranking', JSON.stringify(updated));

            alert(`게임이 끝났습니다!\n최종 점수: ${score}점`);
        }
    }, [timeLeft]);


    return (
        <S.GameLayout>
            <GameSidebar
                timeLeft={timeLeft}
                score={score}
                successCount={successCount}
                failCount={failCount}
                message={message}
            />
            <GameBoard
                moles={moles}
                level={level}
                onLevelChange={handleLevelChange}
                onMoleClick={handleMoleClick}
                onStart={handleStart}
                onStop={handleStop}
            />
        </S.GameLayout>
    );
}