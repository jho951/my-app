import React from "react"

import {ThemeProvider as Provider, createGlobalStyle} from "styled-components"
import {normalize} from "styled-normalize"

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
    primary: "#bc4742",
    footer: "#131c2e",
    button: {
      default: "#195FAD",
      active: "#0378ff",
      disabled: "#676869",
      progress: "#195FAD",
    },
  }

  return (
    <Provider theme={theme}>
      <GlobalStyle />
      {children}
    </Provider>
  )
}

// 기준 점  1069px 에서 1440px 입니다.
const smTestScreen = `@media (max-width: 734px) and (min-width: 0px)`
const mdTestScreen = `@media (max-width: 1068px) and (min-width: 735px)`
const lTestScreen = `@media (max-width: 1000000px) and (min-width: 1441px)`

export {ThemeProvider, smTestScreen, mdTestScreen, lTestScreen}
