import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

// 모바일 스크린 입니다.
const MobileScreen = `@media (max-width: 480px)`;
// 태블릿 스크린 입니다.
const TabletScreen = `@media (max-width: 1024px) and (min-width: 768px)`;
// pc 스크린 입니다.
const WebScreen = `@media @media (min-width: 1024px)`;

const GlobalStyle = createGlobalStyle`
 ${normalize}
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
ul{
    list-style-type: none;
}

`;

export { GlobalStyle, MobileScreen, TabletScreen, WebScreen };
