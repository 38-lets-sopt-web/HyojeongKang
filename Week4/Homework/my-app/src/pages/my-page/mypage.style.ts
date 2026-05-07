import { css } from '@emotion/react';
import theme from '../../styles/theme';

export const containerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    padding-top: ${theme.space.xxlarge};
    background-color: ${theme.color.background};
`;

export const contentWrapperStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.space.medium};
    width: 500px;
`;

export const infoBoxStyle = css`
    width: 100%;
    background-color: ${theme.color.bgInfo};        
    border: 0.5px solid ${theme.color.border};
    border-radius: 12px;
    padding: ${theme.space.medium} ${theme.space.mlarge};
`;

export const infoRowStyle = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 0;
    font-size: ${theme.fontSize.small};
`;

export const infoLabelStyle = css`
    font-weight: 550;
    color: ${theme.color.secondary};
`;

export const infoValueStyle = css`
    color: ${theme.color.gray};
`;