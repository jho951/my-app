import styled from "styled-components"

const LinkTextWrap = styled.ol`
  display: flex;
  font-size: ${(props) => props.fontSize || "0.6rem"};
  gap: ${(props) => props.gap || "10px"};
  justify-content: ${(props) => props.justifyContents || "end"};
  align-items: center;
  cursor: pointer;
`

export {LinkTextWrap}
