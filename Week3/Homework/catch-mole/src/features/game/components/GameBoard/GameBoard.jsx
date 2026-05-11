import * as S from './GameBoard.styles';
import successImg from '../../../../assets/success.png';
import failImg from '../../../../assets/fail.png';
import foundImg from '../../../../assets/found.png';
import { LEVEL_CONFIG } from '../../constants/levelConfig';

export default function GameBoard({ moles, level, onLevelChange, onMoleClick, onStart, onStop, isPlaying }) {
    return (

        <S.GameContent>
            <S.ControlBar>
                <S.SelectLv value={level} onChange={(e) => onLevelChange(Number(e.target.value))} >
                    {Object.entries(LEVEL_CONFIG).map(([key]) => (
                        <option key={key} value={Number(key)}>
                            Level {key}
                        </option>
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
                            <S.MoleCell key={mole.id} onClick={() => onMoleClick(index)}>
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
    )
}