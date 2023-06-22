import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { normalize } from 'styled-normalize';

// 모바일 스크린 입니다.
const MOBILE_SIZE = '768px';
const MOBILE = `@media (max-width: ${MOBILE_SIZE})`;

// 태블릿 스크린 입니다.
const TABLET = `@media (max-width: 1024px) and (min-width: 768px)`;

// pc 스크린 입니다.
const DESKTOP = `@media (min-width: 1024px)`;

// contents 영역입니다.
const CONTENTS_WIDTH = `calc(100% - 64px)`;

// 프로젝트에서 사용되는 theme입니다.

const theme = {
  padding: '200px',
  primary: '#6bc7f1',
  subColor: '#FDFDFD',
  textColor: '#474747',
  background: '#ffffff',
  footer: '#191919',
  disabled: 'rgba(19, 100, 193, 0.45)',
  fontSize: {
    s: '1.4rem',
    m: '1.6rem',
    l: '1.8rem',
    xl: '2rem',
    title: '2.4rem',
  },
  button: {
    text: '#ffffff',
    default: 'rgba(19, 100, 193, 0.8)',
    active: 'rgba(19, 100, 193,1)',
    progress: 'rgba(19, 100, 193,0.7)',
  },
};

// 프로젝트에서 사용되는 GlobalStyle 입니다.
const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    text-decoration: none;
  }
  :root {
    font-size: 62.5%;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
  }


  html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: none;
  } 
  body {

    overflow: overlay;
    color: #000000;
    ol,ul {
      list-style-type: none;
    }
    a {
      text-decoration: none;
      color: inherit;
    }  
    input::-ms-clear,
     input::-ms-reveal{
	    display:none;width:0;height:0;
    }
      input::-webkit-search-decoration,
      input::-webkit-search-cancel-button,
      input::-webkit-search-results-button,
      input::-webkit-search-results-decoration{
	    display:none;
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
`;

export { GlobalStyle, MOBILE_SIZE, MOBILE, TABLET, DESKTOP, CONTENTS_WIDTH, theme };
