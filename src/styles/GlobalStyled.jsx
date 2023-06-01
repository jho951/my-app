import styled, {createGlobalStyle, keyframes} from "styled-components"
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
* {
  box-sizing: border-box;
}

:root{
  font-size: clamp(1.8rem, 0.8vw, 2.4rem);
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  font-size: 62.5%;
}
html,
body {
  font-family: Inter;
  overflow: hidden;
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

}
`

// 프로젝트에서 사용되는 color 입니다.
const theme = {
  background: "#ffffff",
  primary: "#da17dd",
  subColor: "#6bc7f1",
  textColor: "#000000",
  header: {
    padding: "3% 14% 0.4% 13%",
    text: "#FDFDFD",
    background: "rgb(0, 0, 0 ,0.2)",
  },
  footer: {text: "#191919", background: "#FDFDFD"},
  fontSize: {
    title: "2.4rem",
    subTitle: "2rem",
    text: "1.4rem",
    gnb: "1.8rem",
  },

  button: {
    text: "#060606",
    default: "rgba(19, 100, 193, 0.8)",
    active: "rgba(19, 100, 193,1)",
    disabled: "rgba(19, 100, 193, 0.45)",
    progress: "rgba(19, 100, 193,0.7)",
  },
}

//loading spin jsx 파일입니다.
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
const Spinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid ${(props) => props.theme.button.progress};
  border-radius: 50%;
  width: ${(props) => props.width || "20px"};
  height: ${(props) => props.height || "20px"};
  position: relative;
  transform: translateX(-50%);
  animation: ${spin} 1s linear infinite;
`

export {GlobalStyle, MobileScreen, TabletScreen, WebScreen, theme, Spinner}
