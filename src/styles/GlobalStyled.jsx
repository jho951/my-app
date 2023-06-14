import styled, {createGlobalStyle, keyframes} from "styled-components"
import {normalize} from "styled-normalize"

// 모바일 스크린 입니다.
const MOBILE_SIZE = "768px"
const MobileScreen = `@media (max-width: ${MOBILE_SIZE})`
// 태블릿 스크린 입니다.
const TabletScreen = `@media (max-width: 1024px) and (min-width: 768px)`
// pc 스크린 입니다.
const WebScreen = `@media (min-width: 1024px)`

// 프로젝트에서 사용되는 theme입니다.
const theme = {
  contents: `calc(100% - 64px)`,
  primary: "#6bc7f1",
  subColor: "#FDFDFD",
  textColor: "#474747",
  background: "#ffffff",
  footer: "#191919",
  disabled: "rgba(19, 100, 193, 0.45)",
  fontSize: {
    s: "1.4rem",
    m: "1.6rem",
    l: "1.8rem",
    xl: "2rem",
    title: "2.4rem",
  },
  button: {
    text: "#ffffff",
    default: "rgba(19, 100, 193, 0.8)",
    active: "rgba(19, 100, 193,1)",
    progress: "rgba(19, 100, 193,0.7)",
  },
}

// 프로젝트에서 사용되는 GlobalStyle 입니다.
const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  :root {
    font-size: 62.5%;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
  }
  html,
  body {
    color: #000000;
    ol,ul {
      list-style-type: none;
    }
    a {
      text-decoration: none;
      color: inherit;
    }  
    .visuallyhidden {
      position: absolute;
      clip: rect(1px, 1px, 1px, 1px);
      -webkit-clip-path: inset(0px 0px 99.9% 99.9%);
      clip-path: inset(0px 0px 99.9% 99.9%);
      overflow: hidden;
      height: 1px;
      width: 1px;
      padding: 0;
      border: 0;
    } 
  }
`

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
const Spinner = styled.div`
  border: 3px solid #f3f3f3;
  border-top: 3px solid ${(props) => props.theme.button.progress};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  position: relative;
  transform: translateX(-50%);
  animation: ${spin} 1s linear infinite;
`

export {
  GlobalStyle,
  MOBILE_SIZE,
  MobileScreen,
  TabletScreen,
  WebScreen,
  theme,
  Spinner,
}
