import styled, {css} from "styled-components"
import {
  MobileScreen,
  TabletScreen,
  WebScreen,
} from "../../../styles/GlobalStyled"

const CommonControlStyles = css`
  width: 100%;
  max-width: 448px;
  height: 64px;
  display: flex;
  padding-left: 16px;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
`

const ControllWrap = styled.section`
  ${WebScreen} {
    ${CommonControlStyles}
    box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
    .control-elem {
      width: 100%;
      display: flex;
      max-width: 336px;
      font-size: ${(props) => props.theme.fontSize.m};
      justify-content: space-between;
      .change-banner-elem {
        width: 100%;
        max-width: 120px;
        display: flex;
        justify-content: space-between;
        li {
          cursor: pointer;
        }
      }
      .progress-elem {
        width: 100%;
        max-width: 175px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .progress {
          width: 144px;
          display: flex;
          border: 1px solid ${(props) => props.theme.disabled};
          height: 1px;
          align-items: inherit;
          .progress-bar {
            max-width: ${(props) => props.width}%;
            border: 1px solid ${(props) => props.theme.textColor};
            height: 1px;
            transition: width 0.5s;
          }
        }
      }
    }
  }

  ${TabletScreen} {
    ${CommonControlStyles}
    background-color: rgba(23, 31, 31, 0);
    transition: background-color 1s;
    height: 10px;
    .progress {
      width: 100%;
      min-width: 1024px;
      display: flex;
      height: 1px;
      align-items: inherit;
      transition: width 1s;
      .progress-bar {
        max-width: ${(props) => props.width}%;
        border: 1px solid ${(props) => props.theme.textColor};
        transition: width 0.5s;
      }
    }
    .change-banner-elem,
    .progress-current-num,
    .progress-total-num {
      display: none;
    }
  }
`

export {ControllWrap}
