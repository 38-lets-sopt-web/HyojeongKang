import * as S from './GameBoard.styles';
import successImg from '../../../../assets/success.png';
import failImg from '../../../../assets/fail.png';
import foundImg from '../../../../assets/found.png';

export default function GameBoard({ moles, onMoleClick, onStart, onStop }) {
    return (
        <>
            {/* 오른쪽 게임 섹션 */}
            <S.GameContent>
                <S.ControlBar>
                    <S.StartButton onClick={onStart}>시작</S.StartButton>
                    <S.StopButton onClick={onStop}>중단</S.StopButton>
                </S.ControlBar>

                <S.MoleWrapper>
                    <S.MoleGridBox>
                        <S.MoleGrid>
                            {moles.map((mole, index) => (
                                <S.MoleCell key={index} onClick={() => onMoleClick(index)}>
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
        </>
    )
}