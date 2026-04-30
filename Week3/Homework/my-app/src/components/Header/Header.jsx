import React from "react";
import * as S from "./Header.styles";

export default function Header({ currentView, setView }) {
    return (
        <S.HeaderContainer>
            <S.Title>두더지 게임</S.Title>
            <S.BtnGroup>
                <S.StyledButton type="button" isActive={currentView === 'game'} onClick={() => setView('game')} >
                    게임
                </S.StyledButton>
                <S.StyledButton type="button" isActive={currentView === 'ranking'} onClick={() => setView('ranking')}>
                    랭킹
                </S.StyledButton>
            </S.BtnGroup>
        </S.HeaderContainer>
    )
}