import {ThemeProvider as Provider, createGlobalStyle} from "styled-components"
import {normalize} from "styled-normalize"

// 기준 점  1069px 에서 1440px 입니다.
const smTestScreen = `@media (max-width: 734px) and (min-width: 0px)`
const mdTestScreen = `@media (max-width: 1068px) and (min-width: 735px)`
const lTestScreen = `@media (max-width: 10000px) and (min-width: 1441px)`

const GlobalStyle = createGlobalStyle`
 ${normalize}
  /* 가로 모드 상황 css 적용 */
@media (orientation: landscape) {
}
/* 세로 모드 상황 css 적용 */
@media (orientation: portrait) {
}
@media (min-width: 50em) and (min-height: 60em) {
  article {
    column-count: 2;
  }
}
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
  grid-gap: 1em;
}
:root {
  scroll-behavior: smooth;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: clamp(1rem, 0.2rem + 1.5vw, 1.5rem);
}

`
const ThemeProvider = ({children}) => {
  const theme = {
    background: "#ffffff",
    primary: "#da17dd",
    footer: "#131c2e",
    text: "#060606",
    button: {
      text: "#ffffff",
      default: "rgba(19, 100, 193, 0.8)",
      active: "rgba(19, 100, 193,1)",
      disabled: "rgba(19, 100, 193, 0.45)",
      progress: "rgba(19, 100, 193,0.7)",
    },
  }

  return (
    <Provider theme={theme}>
      <GlobalStyle />
      {children}
    </Provider>
  )
}

export {ThemeProvider, smTestScreen, mdTestScreen, lTestScreen}
