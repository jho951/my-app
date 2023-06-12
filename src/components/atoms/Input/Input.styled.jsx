import styled, {css} from "styled-components"

const commonInputStyle = css`
  font-size: ${(props) => props.theme.fontSize.s};
  outline: none;
  ${(props) => props.fullWidth && `width: 100%`};
`

const inputStyle = {
  password: css`
    width: 650px;
    border: none;
  `,
  text: css`
    ${(props) => (props.fullWidth ? `width: 100%` : `width:688px`)};
    border: 1px solid #ccc;
    &:focus {
      border: 1px solid red;
    }
  `,
}

const CustomInputWrap = styled.input`
  ${commonInputStyle}
  ${(props) => inputStyle[props.type] || inputStyle["text"]}
`

export {CustomInputWrap}
