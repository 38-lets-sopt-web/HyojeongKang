import { css } from '@emotion/react';
import theme from '../../styles/theme';

export const containerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;      
    padding: ${theme.space.xxlarge} 0;  
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

export const loginTextStyle = css`
    color: ${theme.color.gray};
    margin: 0;
    font-size: ${theme.fontSize.small};
`;

export const loginLinkStyle = css`
    color: ${theme.color.pointText};
    cursor: pointer;
    margin-left: 4px;
    font-weight: bold;
    font-size: ${theme.fontSize.small};
`;

export const selectContainer = css`
    width: 500px;
`;

export const selectStyle = css`
    width: 100%;
    padding: ${theme.space.smedium};
    border: 1px solid ${theme.color.border};
    border-radius: 8px;
    font-size: ${theme.fontSize.small};
    cursor: pointer;
`;

export const labelStyle = css`
    font-size: ${theme.fontSize.small};
    margin-bottom: 4px;
    display: block;
`;