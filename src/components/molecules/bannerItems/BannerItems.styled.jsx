import styled, {css} from "styled-components"
import {DESKTOP, MOBILE, TABLET} from "../../../styles/GlobalStyled"

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
  ${CommonControlStyles}

  ${DESKTOP} {
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
  ${TABLET} {
    background-color: rgba(23, 31, 31, 0);
    transition: background-color 1s;
    height: 10px;

    .change-banner-elem,
    .progress-current-num,
    .progress-total-num {
      display: none;
    }

    .progress {
      width: 100%;
      display: flex;
      height: 1px;
      align-items: inherit;
      transition: width 1s;

      .progress-bar {
        width: ${(props) => props.progressWidth}%;
        border: 1px solid ${(props) => props.theme.textColor};
        background-color: ${(props) => props.theme.textColor};
        transition: width 0.5s;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }
  }

  ${MOBILE} {
    background-color: rgba(23, 31, 31, 0);
    transition: background-color 1s;
    height: 10px;

    .change-banner-elem,
    .progress-current-num,
    .progress-total-num {
      display: none;
    }

    .progress {
      width: 100%;
      display: flex;
      height: 1px;
      align-items: inherit;
      transition: width 1s;

      .progress-bar {
        width: ${(props) => props.progressWidth}%;
        border: 1px solid ${(props) => props.theme.textColor};
        background-color: ${(props) => props.theme.textColor};
        transition: width 0.5s;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }
  }
`

export {ControllWrap}
