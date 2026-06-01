import { css } from '@emotion/react';
import theme from '../../styles/theme';

export const searchContainerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: ${theme.space.xxlarge};
`;

export const formStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    gap: ${theme.space.medium};
`;

export const resultTitleStyle = css`
   width: 500px; 
   text-align: left; 
`;

export const emptyStyle = css`
    width: 500px;
    text-align: center;
    color: gray;
    font-size: ${theme.fontSize.small};
    background-color: ${theme.color.bgInfo};        
    border: 0.5px solid ${theme.color.border};
    border-radius: 12px;
    padding: ${theme.space.xxlarge} ${theme.space.mlarge};
`;

export const listContainerStyle = css`
    display: flex;
    flex-direction: column;
    padding: ${theme.space.xxlarge};
`;

export const memberGridStyle = css`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: ${theme.space.smedium};
`;