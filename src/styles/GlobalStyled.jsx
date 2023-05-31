import {createGlobalStyle} from "styled-components"
import {normalize} from "styled-normalize"

// 모바일 스크린 입니다.
const MobileScreen = `@media (max-width: 768px)`
// 태블릿 스크린 입니다.
const TabletScreen = `@media (max-width: 1024px) and (min-width: 768px)`
// pc 스크린 입니다.
const WebScreen = `@media (min-width: 1024px)`

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
  font-size: clamp(18px, 0.8vw, 24px);


}
body {
  font-family: Inter;
  margin: 0;
  padding: 0;
  overflow: overlay;
  color:#000000;
  ol, ul{
    list-style-type: none;
}
a{
  text-decoration: none;
   color: inherit;
}
p{
  margin: 0; 
}
}
`

// project 에서 사용되는 color 입니다.
const theme = {
  background: "#ffffff",
  primary: "#da17dd",
  textColor: "#000000",
  fontSize: {
    title: "24px",
    subTitle: "20px",
    text: "14px",
    gnb: "14px",
  },
  footer: {text: "#FFFFFF", background: "#131c2e"},
  button: {
    text: "#060606",
    default: "rgba(19, 100, 193, 0.8)",
    active: "rgba(19, 100, 193,1)",
    disabled: "rgba(19, 100, 193, 0.45)",
    progress: "rgba(19, 100, 193,0.7)",
  },
}

export {GlobalStyle, MobileScreen, TabletScreen, WebScreen, theme}
