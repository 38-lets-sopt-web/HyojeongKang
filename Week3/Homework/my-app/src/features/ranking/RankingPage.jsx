import { useEffect, useState } from "react";
import * as S from './Ranking.styles';

export default function GamePage() {

    const [rankings, setRankings] = useState([]);

    // 로컬스토리지에서 랭킹 불러오기
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('ranking') || '[]');
        setRankings(stored);
    }, [])

    // 랭킹 초기화
    const handleReset = () => {
        const confirmed = window.confirm("정말 초기화 하시겠습니까?");
        if (!confirmed) return;  // 취소 시 중단

        localStorage.removeItem('ranking');
        setRankings([]);
    }

    return (
        <S.RankingSection>
            <S.BoardTitle>
                <S.Title>랭킹 보드</S.Title>
                <S.ResetBtn onClick={handleReset}>랭킹 초기화</S.ResetBtn>
            </S.BoardTitle>

            <S.RankingTable>
                <thead>
                    <tr>
                        <S.Th>순위</S.Th>
                        <S.Th>레벨</S.Th>
                        <S.Th>점수</S.Th>
                        <S.Th>기록 시각</S.Th>
                    </tr>
                </thead>
                <tbody>
                    {rankings.length === 0 ? (
                        <tr>
                            <S.Td colSpan={3}>아직 기록이 없습니다. 게임을 시작해보세요!</S.Td>
                        </tr>
                    ) : (
                        rankings.map((record, index) => (
                            <tr key={index}>
                                <S.Td>{index + 1}</S.Td>
                                <S.Td>Level {record.level}</S.Td>
                                <S.Td>{record.score}점</S.Td>
                                <S.Td>{record.date}</S.Td>
                            </tr>
                        ))
                    )}
                </tbody>
            </S.RankingTable>
        </S.RankingSection>

    )
}