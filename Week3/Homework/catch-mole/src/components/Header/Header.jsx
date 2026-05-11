import React from "react";
import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

export const HeaderContainer = styled.header`
  display: flex;
  gap: 20px;
  padding: 1rem 2rem;
  margin: 1rem;
  border-radius: ${theme.borderRadius.xl};
  background-color: ${theme.colors.primaryLight};
`;

export const Title = styled.h4`
  color: ${theme.colors.black};
  font-size: ${theme.fontSize.lg};
  margin: 0;
`;

export const BtnGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledButton = styled.button`
  padding: 4px 20px;
  border-radius: ${theme.borderRadius.xl};
  border: none;
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSize.xs};
  cursor: pointer;

  /* 선택되지 않았을 때의 기본 스타일 */
  background-color: ${theme.colors.primaryLight};
  color: ${theme.colors.primaryDark};
  border: 1px solid ${theme.colors.primary};

  /* isActive가 true(클릭됨)일 때 스타일 반전 */
  ${props => props.isActive && `
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${theme.fontSize.sm};
    box-shadow: 0 0 3px ${theme.colors.primary};
  `}

  &:hover {
    transform: translateY(-2px);
  }
`;

export default function Header({ currentView, setView }) {
    return (
        <HeaderContainer>
            <Title>두더지 게임</Title>
            <BtnGroup>
                <StyledButton type="button" isActive={currentView === 'game'} onClick={() => setView('game')} >
                    게임
                </StyledButton>
                <StyledButton type="button" isActive={currentView === 'ranking'} onClick={() => setView('ranking')}>
                    랭킹
                </StyledButton>
            </BtnGroup>
        </HeaderContainer>
    )
}