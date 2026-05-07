import { css } from '@emotion/react';
import theme from '../../styles/theme';


export const cardStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    background-color: #ffffff;
    border-radius: 12px;
    padding: 20px 32px;
    width: 100%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

export const nameStyle = css`
    font-size: 15px;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0;
`;

export const partBadgeStyle = css`
    background-color: #f0f4ff;
    color: #4a6cf7;
    font-size: 12px;
    font-weight: 500;
    padding: 4px 10px;
    border-radius: 20px;
`;