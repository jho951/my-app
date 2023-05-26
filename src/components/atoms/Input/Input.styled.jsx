import styled, {css} from "styled-components"

const LABEL_FONT_SIZE = "1.5rem"
const INPUT_FONT_SIZE = "1.5rem"

const HELP_FONT_SIZE = "1.1rem"
const HELP_COLOR = "#FF4545"

const INPUT_HEIGHT = "48px"

export const SCustomInput = styled.div`
  width: 100%;
  position: relative;

  .custom-input-label {
    display: block;

    color: #000000;
    font-size: ${LABEL_FONT_SIZE};
    font-weight: 400;
    margin-bottom: 8px;
  }

  .custom-input-label-point {
    color: #ff0000;
    font-size: ${LABEL_FONT_SIZE};
    font-weight: 400;
  }

  .custom-input-container {
    width: 100%;
    height: ${INPUT_HEIGHT};

    ${(props) =>
      props.width &&
      css`
        width: ${props.width};
      `}
    ${(props) =>
      props.height &&
      css`
        height: ${props.height};
      `}
    ${(props) =>
      props.fontSize &&
      css`
        font-size: ${props.fontSize};
      `}
  


    padding: 0 15px 0 5px;

    border: 1px solid #e0e0e0;
    border-radius: 5px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    transition: border-color 0.3s;

    background-color: #ffffff;

    &:hover {
      border-color: ${(props) => props.theme.mainColor2};

      ${(props) =>
        props.color &&
        css`
          border-color: ${props.color};
        `};
    }

    &.active {
      border-color: ${(props) => props.theme.mainColor};

      ${(props) =>
        props.color &&
        css`
          border-color: ${props.color};
        `};
    }

    &.error {
      border-color: ${HELP_COLOR};
    }

    ${(props) =>
      props.disabled &&
      css`
        color: #949494;
        background-color: #f4f4f4;
      `}

    input {
      width: 100%;
      height: 100%;

      color: #555555;
      font-size: ${INPUT_FONT_SIZE};

      outline: none;
      border: none;
      box-sizing: border-box;
      background-color: #ffffff;

      ${(props) =>
        props.disabled &&
        css`
          color: #949494;
          background-color: #f4f4f4;
        `}

      &::placeholder {
        color: #999999;
        font-size: 0.9em;
      }
    }

    input[type="color"] {
      border-radius: 0px !important;
    }
  }

  .help-text {
    color: ${HELP_COLOR};

    font-size: ${HELP_FONT_SIZE};
    font-weight: bold;

    letter-spacing: -0.28px;
    margin-top: 3px;
  }

  .password-icon {
    display: flex;
    justify-content: center;
    align-items: center;

    color: #999999;
    cursor: pointer;

    &:focus-visible {
      outline: 1px solid ${(props) => props.theme.primary};
    }

    svg {
      width: 18px;
      height: 18px;
    }
  }
`
