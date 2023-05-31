import styled, {css} from "styled-components"

const IconsInputWrap = styled.div`
  display: flex;
  width: 688px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #d9d9d9;

  ${({isFocused}) =>
    isFocused &&
    css`
      border: 1px solid red;
    `}
  .input-icons {
    display: flex;
    align-items: center;
    margin: 5px;
    cursor: pointer;
  }
`

export {IconsInputWrap}
