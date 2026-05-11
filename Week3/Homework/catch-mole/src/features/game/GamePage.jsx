import { useState, useEffect, useRef, useCallback } from 'react';
import * as S from './Game.styles.js';
import GameSidebar from './components/GameSidebar/GameSidebar.jsx';
import GameBoard from './components/GameBoard/GameBoard.jsx';
import { LEVEL_CONFIG } from './constants/levelConfig.js';
import Modal from '../../components/Modal/Modal.jsx';
import { useMoleGame } from '../../hooks/useMoleGame.js'

export default function GamePage() {
    const {
        level, score, successCount, failCount,
        message, setMessage,
        isPlaying, timeLeft, isGameOver,
        setScore, setSuccessCount, setFailCount,
        handleLevelChange, handleStart, handleStop,
    } = useMoleGame();

    return (
        <S.GameLayout>
            <GameSidebar
                timeLeft={(timeLeft / 10).toFixed(1)}
                score={score}
                successCount={successCount}
                failCount={failCount}
                message={message}
            />
            <GameBoard
                level={level}
                isPlaying={isPlaying}
                score={score}
                isGameOver={isGameOver}
                onLevelChange={handleLevelChange}
                onStart={handleStart}
                onStop={handleStop}
                setScore={setScore}
                setSuccessCount={setSuccessCount}
                setFailCount={setFailCount}
                setMessage={setMessage}
            />
        </S.GameLayout>
    );
}