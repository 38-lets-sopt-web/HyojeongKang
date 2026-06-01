const RANKING_KEY = 'ranking';

/* 랭킹 전체 불러오기 */
export const getRanking = () => {
    return JSON.parse(localStorage.getItem(RANKING_KEY) || '[]');
};

/* 새 기록 추가 후 정렬된 랭킹 저장 */
export const saveRanking = ({ level, score }) => {
    const newRecord = {
        id: crypto.randomUUID(),
        level,
        score,
        date: new Date().toLocaleString('ko-KR'),
    };

    const prev = getRanking();
    const updated = [...prev, newRecord].sort((a, b) => {
        if (Number(b.level) !== Number(a.level)) return Number(b.level) - Number(a.level);
        return b.score - a.score;
    });

    localStorage.setItem(RANKING_KEY, JSON.stringify(updated));
    return updated;
};

/* 랭킹 초기화 */
export const clearRanking = () => {
    localStorage.removeItem(RANKING_KEY);
};