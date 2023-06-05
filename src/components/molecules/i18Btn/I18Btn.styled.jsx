import styled from "styled-components"
import {WebScreen} from "../../../styles/GlobalStyled"

export const LocaleContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 40px;
  .locale-btn {
    width: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 200;
    white-space: nowrap;
    &:hover {
      opacity: 0.7;
    }
    ${WebScreen} {
      .arrow {
        width: 6px;
        height: 6px;
        border-right: 1px solid ${(props) => props.theme.subColor};
        border-bottom: 1px solid ${(props) => props.theme.subColor};
        transform: rotate(45deg);
      }
    }
  }
  .locale-bg {
    display: none;
    &.open {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
    }
  }

  .locale-bg-block {
    width: 100%;
    height: 50%;
    position: absolute;
    top: 100%;
    left: 55%;
    transform: translateX(-50%);
  }

  .locale-select-box {
    display: none;
    &.open {
      display: block;
    }
    width: 100%;
    background-color: ${(props) => props.theme.background};
    position: absolute;
    margin-top: 10%;
    top: 100%;
    left: 60%;
    transform: translateX(-50%);
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.3);

    li {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #f3f3f3;
      font-size: 0.9em;
      color: #828282;

      cursor: pointer;

      &.active {
        background-color: #f2f2f2;
        color: ${(props) => props.theme.primary};
      }

      &.active-btn {
        color: ${(props) => props.theme.primary};
      }

      &:hover {
        background-color: #f2f2f2;
        color: ${(props) => props.theme.primary};
      }
    }
  }
`
