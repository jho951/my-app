import styled, {css} from "styled-components"

const InputElement = styled.input`
  ${(props) =>
    props.className === "search"
      ? css`
          width: 650px;
          border: none;
        `
      : css`
          width: 688px;
          border: 1px solid #ccc;
          &:focus {
            border: 1px solid red;
          }
        `};
  padding: 10px 0px;
  text-indent: 10px;
  font-size: 0.6rem;
  outline: none;
`

export {InputElement}
