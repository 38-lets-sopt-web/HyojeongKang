import { css } from '@emotion/react';
import theme from '../../styles/theme';

export const detailContainerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding-bottom: 100px;
`;

export const btnBack = css`
    all: unset;          
    cursor: pointer; 
    width: 500px; 
    text-align: left; 
    margin-bottom : ${theme.space.smedium};
    font-size: ${theme.fontSize.medium};
    color: ${theme.color.gray}
    align-items: flex-end; 
    gap: 8px;             

    svg {
        width: 14px;      
        height: 14px;
    }
`;