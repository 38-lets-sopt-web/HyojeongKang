import { css } from '@emotion/react';
import theme from '../../styles/theme';


export const cardStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.space.smedium};
    background-color: ${theme.color.bgCard};
    border-radius: 12px;
    padding: ${theme.space.medium} ${theme.space.large};
    width: 100%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

export const nameStyle = css`
    font-size: ${theme.fontSize.medium};
    font-weight: 600;
    color: #1a1a1a;
    margin: 0;
`;

export const partBadgeStyle = css`
    background-color: ${theme.color.bgTag};
    color: ${theme.color.tagText};
    font-size: ${theme.fontSize.small};
    font-weight: 500;
    padding: 4px 10px;
    border-radius: 20px;
`;