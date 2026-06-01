import { saveRanking } from "../utils/storage";
import { useState, useEffect } from 'react';
import { LEVEL_CONFIG } from "../features/game/constants/levelConfig"

export function useMoleGame() {
    const [level, setLevel] = useState(1);
    const [score, setScore] = useState(0);
    const [successCount, setSuccessCount] = useState(0);
    const [failCount, setFailCount] = useState(0);
    const [message, setMessage] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);
    const [timeLeft, setTimeLeft] = useState(LEVEL_CONFIG[1].time * 10);
    const [isGameOver, setIsGameOver] = useState(false);

    // 점수 및 게임 상태 초기화
    const resetScore = (lv = level) => {
        const { time } = LEVEL_CONFIG[lv];
        setTimeLeft(time * 10);
        setScore(0);
        setSuccessCount(0);
        setFailCount(0);
        setMessage('');
        setIsGameOver(false);
    };

    // 레벨 변경 핸들러
    const handleLevelChange = (newLevel) => {
        if (isPlaying) return;
        setLevel(newLevel);
        resetScore(newLevel);
    };

    // 게임 시작 핸들러
    const handleStart = () => {
        if (isPlaying) return;
        resetScore();
        setIsPlaying(true);
    };

    // 게임 중단 핸들러
    const handleStop = () => {
        if (!isPlaying) return;
        resetScore();
        setIsPlaying(false);
    };

    // 카운트다운 타이머
    useEffect(() => {
        if (!isPlaying) return;
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timer); 
                    setIsGameOver(true);  
                    setIsPlaying(false);
                    return 0;
                }
                return prev - 1;
            });
        }, 100);
        return () => clearInterval(timer);
    }, [isPlaying]);

    return {
        level, score, successCount, failCount,
        message, setMessage,
        isPlaying, timeLeft, isGameOver,
        setScore, setSuccessCount, setFailCount, 
        handleLevelChange, handleStart, handleStop,
    };
}