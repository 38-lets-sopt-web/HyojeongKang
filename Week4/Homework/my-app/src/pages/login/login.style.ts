import { css } from '@emotion/react';
import theme from '../../styles/theme';

export const containerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: ${theme.color.background};
`;

export const formStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    gap: ${theme.space.medium};
`;

export const titleStyle = css`
    color: ${theme.color.secondary};
    font-size: ${theme.fontSize.title};
`;