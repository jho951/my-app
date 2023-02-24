import styled, {keyframes} from "styled-components"
import {ThemeProvider} from "styled-components"
const shinyBtnAnimation = keyframes`
  0% {
    transform: scale(0) rotate(45deg);
    opacity: 0;
  }
  80% {
    transform: scale(0) rotate(45deg);
    opacity: 0.5;
  }
  81% {
    transform: scale(4) rotate(45deg);
    opacity: 1;
  }
  100% {
    transform: scale(50) rotate(45deg);
    opacity: 0;
  }
`

export const CustomButton = styled.button`
  ////////////////////////
  /////// 기본 옵션 ////////
  ///////////////////////

  width: ${(props) => props.width || "130px"};
  height: ${(props) => props.height || "40px"};
  color: ${(props) => props.color || "#fff"};
  border-radius: ${(props) => props.borderRadius || "5px"};
  padding: ${(props) => props.padding || "10px 25px"};

  font-weight: ${(props) => props.fontWeight || "500"};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
  border: ${(props) => props.border || "none"};
  /* overflow: hidden; */
  background: ${(props) => props.background || "transparent"};

  ////////////////////////
  /////// 기본 버튼 ////////
  ///////////////////////

  &.btn0 {
    background: ${(props) => props.background || props.theme.button};
    :hover {
      background: rgb(0, 3, 255);
      background: linear-gradient(
        0deg,
        rgba(0, 3, 255, 1) 0%,
        rgba(2, 126, 251, 1) 100%
      );
    }
  }

  ////////////////////////
  /// 좌측 상단 그림자 효과 ///
  ///////////////////////

  &.btn1 {
    background: ${(props) =>
      props.background || `linear-gradient(0deg,#060e83 0%,#0c19b4 100%)`};
    &:before {
      height: 0%;
      width: 2px;
    }
    :hover {
      box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5),
        -4px -4px 6px 0 rgba(116, 125, 136, 0.5),
        inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
        inset 4px 4px 6px 0 rgba(0, 0, 0, 0.4);
    }
  }

  ////////////////////////
  /// 위 아래 선 생성 효과 ///
  ///////////////////////

  &.btn2 {
    background: ${(props) => props.background || props.theme.button};
    line-height: ${(props) => props.lineHeight || "42px"};
    padding: 0;
    :before,
    :after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      height: 2px;
      width: 0;
      background: ${(props) => props.background || props.theme.button};
      box-shadow: -1px -1px 5px 0px #fff, 7px 7px 20px 0px #0003,
        4px 4px 5px 0px #0002;
      transition: 400ms ease all;
    }
    :after {
      right: inherit;
      top: inherit;
      left: 0;
      bottom: 0;
    }
    :hover {
      color: #000;
      background: transparent;
      box-shadow: none;
      :before,
      :after {
        width: 100%;
        transition: 800ms ease all;
      }
    }
  }

  &.btn3 {
    background: ${(props) => props.background || props.theme.button};
    border: none;
    z-index: 1;
    :after {
      position: absolute;
      content: "";
      width: 100%;
      height: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      background-image: linear-gradient(315deg, #4dccc6 0%, #96e4df 74%);
      box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
        7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
      transition: all 0.3s ease;
    }
    :hover {
      color: #fff;
      :after {
        top: 0;
        height: 100%;
      }
    }
    :active {
      top: 2px;
    }
  }

  /////////////////////////
  /// 우측 하단 그림자 효과 ///
  ///////////////////////

  &.btn4 {
    border: none;
    color: ${(props) => props.color || "#fff"};
    :after {
      position: absolute;
      content: "";
      width: 0;
      height: 100%;
      top: 0;
      left: 0;
      direction: rtl;
      z-index: -1;
      box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
        7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
      transition: all 0.3s ease;
    }

    :hover {
      color: ${(props) => props.hoverColor || "#fff"};
      :after {
        left: auto;
        right: 0;
        width: 100%;
      }
      background: ${(props) =>
        props.background ||
        `linear-gradient(0deg,rgba(6, 14, 131, 1) 0%, rgba(12, 25, 180, 1) 100%)`};
    }

    :active {
      top: 2px;
    }
  }

  //////////////////////////
  // 좌측에서 색 입혀지는 효과 //
  ////////////////////////

  &.btn5 {
    border: none;
    z-index: 1;
    :after {
      position: absolute;
      content: "";
      width: 0;
      height: 100%;
      top: 0;
      right: 0;
      z-index: -1;
      background-color: ${(props) => props.hoverBackground || `#fbfb67`};
      border-radius: ${(props) => props.borderRadius || "10px"};
      box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
        7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }
    :hover {
      color: ${(props) => props.hoverColor || "#2b311d"};
      :after {
        left: 0;
        width: 100%;
      }
    }
    :active {
      top: 2px;
    }
  }

  //////////////////////////
  /// 아래에서 올라오는 효과  ///
  ////////////////////////

  &.btn6 {
    z-index: 1;
    :after {
      position: absolute;
      content: "";
      width: 100%;
      height: 0;
      top: 0;
      left: 0;
      z-index: -1;
      border-radius: ${(props) => props.borderRadius || "10px"};
      background-color: ${(props) => props.hoverBackground || `#0876f3`};
      background-image: linear-gradient(
        315deg,
        #0876f3 0%,
        rgba(12, 25, 180, 1) 74%
      );
      box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
        7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }
    :hover {
      color: ${(props) => props.hoverColor || "#fff"};
      :after {
        top: auto;
        bottom: 0;
        height: 100%;
      }
    }
    :active {
      top: 2px;
    }
  }

  //////////////////////////
  ///// 전체 화면에 효과  /////
  ////////////////////////

  &.btn7 {
    border: none;
    position: relative;

    :hover {
      text-decoration: none;
      color: #fff;
      opacity: 0.7;
    }

    :before {
      position: absolute;
      content: "";
      display: inline-block;
      top: -180px;
      left: 0;
      width: 30px;
      height: 100%;
      background-color: #fff;
      animation: ${shinyBtnAnimation} 3s ease-in-out infinite;
    }

    :active {
      box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.3),
        -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
        inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
        inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2);
    }
  }

  ///////////////////////////
  /// 색 변경과 rotate 효과 ///
  /////////////////////////

  &.btn8 {
    :after {
      position: absolute;
      content: " ";
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #1fd1f9;
      background-image: linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%);
      transition: all 0.3s ease;
    }
    :hover {
      background: transparent;
      box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5),
        -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
        inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5),
        inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);
      color: #fff;
      :after {
        -webkit-transform: scale(2) rotate(180deg);
        transform: scale(2) rotate(180deg);
        box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5),
          -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
          inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5),
          inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);
      }
    }
  }

  //////////////////////////
  /////// 빛나는 효과  ///////
  ////////////////////////

  &.btn9 {
    background-color: #4dccc6;
    background-image: linear-gradient(315deg, #4dccc6 0%, #96e4df 74%);
    line-height: 42px;
    padding: 0;
    border: none;
    :before,
    :after {
      position: absolute;
      content: "";
      right: 0;
      top: 0;
      box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.9),
        -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
        inset -4px -4px 6px 0 rgba(255, 255, 255, 0.9),
        inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);
      transition: all 0.3s ease;
    }
    :before {
      height: 0%;
      width: 0.1px;
    }
    :after {
      width: 0%;
      height: 0.1px;
    }
    :hover {
      background-color: #89d8d3;
      background-image: linear-gradient(315deg, #89d8d3 0%, #03c8a8 74%);

      :before {
        height: 100%;
      }
      :after {
        width: 100%;
      }
    }
    span {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;

      :before,
      :after {
        position: absolute;
        content: "";
        left: 0;
        bottom: 0;
        box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.9),
          -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
          inset -4px -4px 6px 0 rgba(255, 255, 255, 0.9),
          inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);
        transition: all 0.3s ease;
      }
      :before {
        width: 0.1px;
        height: 0%;
      }
      :after {
        width: 0%;
        height: 0.1px;
      }
      :hover {
        :before {
          height: 100%;
        }
        :after {
          width: 100%;
        }
      }
    }
  }

  //////////////////////////
  /////  애니매이션 효과  /////
  ////////////////////////

  &.btn10 {
    background: ${(props) => props.background || props.theme.button};
    line-height: 42px;
    padding: 0;

    :before,
    :after {
      position: absolute;
      content: "";
      height: 0%;
      width: 1px;
      box-shadow: -1px -1px 20px 0px rgba(255, 255, 255, 1),
        -4px -4px 5px 0px rgba(255, 255, 255, 1),
        7px 7px 20px 0px rgba(0, 0, 0, 0.4), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
    }
    :before {
      right: 0;
      top: 0;
      transition: all 500ms ease;
    }
    :after {
      left: 0;
      bottom: 0;
      transition: all 500ms ease;
    }
    :hover {
      background: transparent;
      color: #76aef1;
      box-shadow: none;
      :before {
        transition: all 500ms ease;
        height: 100%;
      }
      :after {
        transition: all 500ms ease;
        height: 100%;
      }
    }

    span {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      :before,
      :after {
        position: absolute;
        content: "";
        box-shadow: -1px -1px 20px 0px rgba(255, 255, 255, 1),
          -4px -4px 5px 0px rgba(255, 255, 255, 1),
          7px 7px 20px 0px rgba(0, 0, 0, 0.4),
          4px 4px 5px 0px rgba(0, 0, 0, 0.3);
      }
      :before {
        left: 0;
        top: 0;
        width: 0%;
        height: 0.5px;
        transition: all 500ms ease;
      }
      :after {
        right: 0;
        bottom: 0;
        width: 0%;
        height: 0.5px;
        transition: all 500ms ease;
      }
      :hover {
        :before {
          width: 100%;
        }
        :after {
          width: 100%;
        }
      }
    }
  }

  //////////////////////////
  /////  애니매이션 효과  /////
  ////////////////////////

  &.btn11 {
    background: ${(props) => props.background || props.theme.button};
    line-height: 42px;
    padding: 0;
    :before,
    :after {
      position: absolute;
      content: "";
      right: 0;
      bottom: 0;
      background: #fb4b02;
      box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, 0.9),
        -4px -4px 5px 0px rgba(255, 255, 255, 0.9),
        7px 7px 20px 0px rgba(0, 0, 0, 0.2), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;
    }
    :before {
      height: 0%;
      width: 2px;
    }
    :after {
      width: 0%;
      height: 2px;
    }
    :hover {
      color: #fb4b02;
      background: transparent;
      :before {
        height: 100%;
      }

      :after {
        width: 100%;
      }
    }

    span {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      :before,
      :after {
        position: absolute;
        content: "";
        left: 0;
        top: 0;
        background: #fb4b02;
        box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, 0.9),
          -4px -4px 5px 0px rgba(255, 255, 255, 0.9),
          7px 7px 20px 0px rgba(0, 0, 0, 0.2),
          4px 4px 5px 0px rgba(0, 0, 0, 0.3);
        transition: all 0.3s ease;
      }
      :before {
        width: 2px;
        height: 0%;
      }
      :after {
        height: 2px;
        width: 0%;
      }
      :hover {
        :before {
          height: 100%;
        }
        :after {
          width: 100%;
        }
      }
    }
  }

  //////////////////////////
  /////  애니매이션 효과  /////
  ////////////////////////

  ////////////////////////
  /////// 기본 옵션 ////////
  ///////////////////////
  &.btn12 {
    position: relative;
    right: 20px;
    bottom: 20px;
    border: none;
    box-shadow: none;
    width: 130px;
    height: 40px;
    line-height: 42px;
    -webkit-perspective: 230px;
    perspective: 230px;

    & span {
      background: ${(props) =>
        props.color ||
        "linear-gradient(0deg, rgba(0, 172, 238, 1) 0%, rgba(2, 126, 251, 1) 100%)"};
      display: block;
      position: absolute;
      width: 130px;
      height: 40px;
      box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
        7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      margin: 0;
      text-align: center;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
    }

    & span:nth-child(1) {
      box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
        7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
      -webkit-transform: rotateX(90deg);
      -moz-transform: rotateX(90deg);
      transform: rotateX(90deg);
      -webkit-transform-origin: 50% 50% -20px;
      -moz-transform-origin: 50% 50% -20px;
      transform-origin: 50% 50% -20px;
    }

    &:hover span:nth-child(1) {
      box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
        7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      -webkit-transform: rotateX(0deg);
      -moz-transform: rotateX(0deg);
      transform: rotateX(0deg);
    }
    &:hover span:nth-child(2) {
      box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
        7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      color: transparent;
      -webkit-transform: rotateX(-90deg);
      -moz-transform: rotateX(-90deg);
      transform: rotateX(-90deg);
    }
  }
`