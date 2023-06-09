import styled, {css} from "styled-components"

const CommonControlStyles = css`
  width: 100%;
  max-width: 448px;
  height: 50px;
  display: flex;
  padding-left: 16px;
  position: absolute;
  justify-content: center;
  align-items: center;
  right: 13%;
  bottom: 0%;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
  background-color: white;
`

const ControllWrap = styled.section`
  ${CommonControlStyles}
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
`

export {ControllWrap}
