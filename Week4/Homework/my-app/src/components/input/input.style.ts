import { css } from '@emotion/react';
import theme from '../../styles/theme'; 

export const inputStyle = css`
    padding: 12px;
    border: 1px solid ${theme.color.border};
    border-radius: 8px;
    width: 100%;
    
    &:focus {
        outline: none;
        border-color: ${theme.color.primary};
    }
`;

export const wrapperStyle = css`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
`;

export const labelStyle = css`
    font-size: 14px;
    color: ${theme.color.text};
`;