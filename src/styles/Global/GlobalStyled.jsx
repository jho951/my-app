import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
   /* Reset CSS */
   *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: sans-serif;
    line-height: 1.5;
  }

  ul,
  ol,
  dl {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6,
  p,
  blockquote,
  pre,
  figure,
  table {
    margin: 0;
    padding: 0;
  }

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block;
  }

  svg {
    overflow: hidden;
    vertical-align: middle;
  }

  [hidden] {
    display: none;
  }
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
#seo {
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  width: 1px;
  overflow: hidden;
  position: absolute;
  user-select: none;
  white-space: nowrap;
}
:root {
  scroll-behavior: smooth;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: clamp(1rem, 0.2rem + 1.5vw, 1.5rem);
}
`
// 기준 점  1069px 에서 1440px 입니다.
const smTestScreen = `@media (max-width: 734px) and (min-width: 0px)`
const mdTestScreen = `@media (max-width: 1068px) and (min-width: 735px)`
const lTestScreen = `@media (max-width: 1000000px) and (min-width: 1441px)`

export {GlobalStyle, smTestScreen, mdTestScreen, lTestScreen}
