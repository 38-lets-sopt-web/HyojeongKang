import { css } from '@emotion/react';
import theme from '../../styles/theme';

export const inputWrapperStyle = css`
    position: relative;
    width: 100%;
`;

export const inputStyle = css`
    padding: ${theme.space.smedium};
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
    color: ${theme.color.text};
    font-size: ${theme.fontSize.small};
`;

export const toggleButtonStyle = css`
    position: absolute;
    right: ${theme.space.small};
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    color: ${theme.color.gray};
    display: flex;
    align-items: center;
    font-size: ${theme.fontSize.large};
`;