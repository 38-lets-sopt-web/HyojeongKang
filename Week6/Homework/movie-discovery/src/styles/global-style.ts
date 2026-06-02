import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background: ${theme.colors.bg};
    color: ${theme.colors.text};
    font-family: 'Pretendard', sans-serif;
  }
`
