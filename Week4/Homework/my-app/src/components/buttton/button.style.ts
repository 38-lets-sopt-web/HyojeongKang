import { css } from '@emotion/react';
import theme from '../../styles/theme';

// 버튼 공통 스타일
const baseButtonStyle = css`
    padding: ${theme.space.smedium};
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    width: 100%;
    font-size: ${theme.fontSize.small};
`;

export const primaryButtonStyle = css`
    ${baseButtonStyle};
    background-color: ${theme.color.primary};
    color: white;
    border: none;
`;

export const secondaryButtonStyle = css`
    ${baseButtonStyle};
    background: none;
    border: none;
    color: ${theme.color.pointText};
`;