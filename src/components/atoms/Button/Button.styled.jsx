import styled, {css} from "styled-components"

const buttonSize = {
  small: css`
    padding: 10px;
    font-size: ${(props) => props.theme.fontSize.s};
  `,
  medium: css`
    padding: 10px 20px;
    font-size: ${(props) => props.theme.fontSize.m};
  `,
  large: css`
    padding: 40px 60px;
    font-size: ${(props) => props.theme.fontSize.l};
  `,
}

const commonButtonStyles = css`
  white-space: nowrap;
  transition: all 0.3s ease;
  position: relative;
  outline: none;
  border: none;
  cursor: pointer;
  &:active {
    transform: scale(1);
  }
  &:disabled {
    cursor: not-allowed;
    transform: ${(props) => (props.loading ? "scale(0.96)" : "scale(1)")};
  }
`

const buttonStyle = {
  default: css`
    color: ${(props) => props.theme.button.text};
    background: ${(props) => props.theme.button.default};
    color: #ffffff;
    &:disabled {
      background: ${(props) =>
        props.loading ? props.theme.button.progress : props.theme.disabled};
    }
    &:not(:disabled) {
      &:hover {
        box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
          7px 7px 20px 0px rgba(41, 41, 41, 0.3),
          4px 4px 5px 0px rgba(39, 38, 38, 0.3);
      }
      &:active {
        background: ${(props) => props.theme.button.active};
      }
    }
    &:focus {
      outline: none;
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.3);
    }
  `,
  outline: css`
    background: transparent;
    border: 1.5px solid ${(props) => props.theme.button.default};
    color: ${(props) => props.theme.button.default};
    &:disabled {
      border: 1.5px solid
        ${(props) =>
          props.loading ? props.theme.button.progress : props.theme.disabled};
      color: ${(props) =>
        props.loading ? props.theme.button.progress : props.theme.sabled};
    }

    &:not(:disabled) {
      &:hover {
        border: 1.8px solid ${(props) => props.theme.button.default};
        transition: border 0.3s ease-in-out;
        font-weight: 600;
        &:active {
          box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
            7px 7px 20px 0px rgba(41, 41, 41, 0.3),
            4px 4px 5px 0px rgba(39, 38, 38, 0.3);
        }
      }
    }

    &:focus {
      outline: none;
      border: 2px solid ${(props) => props.theme.button.active};
      font-weight: 600;
    }
  `,

  skip: css`
    position: absolute;
    width: 100%;
    top: -30px;
    left: 0;
    padding: 0;
    background-color: ${(props) => props.theme.subColor};
    color: ${(props) => props.theme.textColor};
    z-index: 120;
    opacity: 0;
    pointer-events: none;
    &:focus {
      font-size: ${(props) => props.theme.fontSize.m};
      top: 0;
      opacity: 1;
      pointer-events: auto;
    }
  `,

  text: css`
    display: inline-block;
    color: ${(props) => props.theme.text};
    background: transparent;
    &:disabled {
      color: ${(props) =>
        props.loading ? props.theme.button.progress : props.theme.disabled};
    }

    &:not(:disabled) {
      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.text};
      }
      &:active {
        transform: none;
        font-weight: 600;
        border-bottom: 1px solid ${(props) => props.theme.text};
      }
    }

    &:focus {
      border-bottom: 1px solid ${(props) => props.theme.text};
      font-weight: 600;
    }
  `,

  icon: css`
    background: transparent;
  `,
}
const CustomBtn = styled.button`
  ${commonButtonStyles}
  ${(props) => buttonStyle[props.type] || buttonStyle["default"]}
  ${(props) => buttonSize[props.size] || buttonSize["medium"]}
`

export {CustomBtn}
