import { css } from '@emotion/react';
import theme from '../../styles/theme';

export const headerStyle = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${theme.space.large};
    background-color: ${theme.color.secondary};
`;

export const leftStyle = css`
    display: flex;
    flex-direction: column;
    padding: ${theme.space.smedium};
    gap: 4px;
`;

export const titleStyle = css`
    margin: 0;
    color: white;
    font-size: ${theme.fontSize.large};
`;

export const greetingStyle = css`
    color: white;
    font-size: ${theme.fontSize.small};
`;

export const rightStyle = css`
    display: flex;
    gap: ${theme.space.medium};
`;

export const tabStyle = css`
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: ${theme.fontSize.medium};
`;