import styled, {css} from "styled-components"

// 공통 적용 버튼 스타일
const CommonButtonStyles = css`
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width || "80px"};
  height: ${(props) => props.height || "40px"};
  color: ${(props) => props.color || props.theme.button.text};
  border-radius: ${(props) => props.borderRadius || "3px"};
  font-weight: ${(props) => props.fontWeight || "400"};
  white-space: ${(props) => props.whiteSpace || "nowrap"};
  font-size: ${(props) => props.fontSize || "16px"};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  outline: none;
  border: none;
  &:active {
    transform: scale(0.96);
  }
  &:disabled {
    cursor: not-allowed;
    transform: ${(props) => (props.loading ? "scale(0.96)" : "scale(1)")};
  }
  span {
    display: flex;
    p {
      margin: 0;
    }
  }
`

export const CustomBtn = styled.button`
  ${CommonButtonStyles}
  // 기본 버튼 
  &.solid-btn {
    background: ${(props) => props.theme.button.default};
    &:disabled {
      background: ${(props) =>
        props.loading
          ? props.theme.button.progress
          : props.theme.button.disabled};
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
  }
  //외곽선 버튼
  &.outline-btn {
    background: transparent;
    border: 1.5px solid ${(props) => props.theme.button.default};
    color: ${(props) => props.theme.button.default};
    &:disabled {
      border: 1.5px solid
        ${(props) =>
          props.loading
            ? props.theme.button.progress
            : props.theme.button.disabled};
      color: ${(props) =>
        props.loading
          ? props.theme.button.progress
          : props.theme.button.disabled};
    }
    &:not(:disabled) {
      &:hover {
        border: 1.8px solid ${(props) => props.theme.button.default};
        transition: border 0.3s ease-in-out;
        font-weight: 600;
        &:active {
          box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.3),
            7px 7px 20px 0px rgba(41, 41, 41, 0.2),
            4px 4px 5px 0px rgba(39, 38, 38, 0.2);
        }
      }
    }
  }
  &.text-btn {
    display: inline-block;
    border-radius: 0;
    color: ${(props) => props.theme.text};
    background: transparent;
    &:disabled {
      color: ${(props) =>
        props.loading
          ? props.theme.button.progress
          : props.theme.button.disabled};
    }

    &:not(:disabled) {
      &:hover {
        border-bottom: 0.5px solid ${(props) => props.theme.text};
      }
      &:active {
        transform: scale(1);
        font-weight: 600;
        border-bottom: 1px solid ${(props) => props.theme.text};
      }
    }
  }
`
