import StatusCard from './StatusCard';
import * as S from './GameSidebar.styles';
import { theme } from '../../../../styles/theme';

export default function GameSidebar({ timeLeft, score, successCount, failCount, message }) {
    return (
        <S.Sidebar>
            <StatusCard label="남은 시간" value={timeLeft} />
            <StatusCard label="총 점수" value={score} />

            <S.GridWinLose>
                <StatusCard 
                    label="성공" 
                    value={successCount} 
                    color={theme.colors.success} 
                />
                <StatusCard 
                    label="실패" 
                    value={failCount} 
                    color={theme.colors.danger} 
                />
            </S.GridWinLose>

            <StatusCard label="안내 메시지" value={message || ''} />
        </S.Sidebar>
    );
}