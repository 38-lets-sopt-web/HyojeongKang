import * as S from './GameSidebar.styles';
import { theme } from '../../../../styles/theme';

export default function GameSidebar({ timeLeft, score, successCount, failCount, message }) {
    return (
        <>
            {/* 왼쪽 정보 섹션 */}
            <S.Sidebar>
                <S.Card>
                    <S.CardLabel>남은 시간</S.CardLabel>
                    <S.CardValue>{timeLeft}</S.CardValue>
                </S.Card>

                <S.Card>
                    <S.CardLabel>총 점수</S.CardLabel>
                    <S.CardValue>{score}</S.CardValue>
                </S.Card>

                <S.GridWinLose>
                    <S.Card>
                        <S.CardLabel color={theme.colors.success}>성공</S.CardLabel>
                        <S.CardValue>{successCount}</S.CardValue>
                    </S.Card>
                    <S.Card>
                        <S.CardLabel color={theme.colors.danger}>실패</S.CardLabel>
                        <S.CardValue>{failCount}</S.CardValue>
                    </S.Card>
                </S.GridWinLose>

                <S.Card>
                    <S.CardLabel>안내 메시지</S.CardLabel>
                    <S.CardValue>{message}</S.CardValue>
                </S.Card>
            </S.Sidebar>
        </>
    )
}