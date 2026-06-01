/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
import theme from './theme';

const GlobalStyle = () => (
    <Global
        styles={css`
            * {
                box-sizing: border-box;
            }
            html, body, #root {
                margin: 0;
                padding: 0;
                height: 100%;
                background-color: ${theme.color.background};
            }
        `}
    />
);

export default GlobalStyle;