import styled from "styled-components"

const LinkTextWrap = styled.div`
  display: flex;
  font-size: ${(props) => props.fontSize || "0.6rem"};
  justify-content: ${(props) => props.justifyContents || "end"};
  align-items: center;
`

export {LinkTextWrap}
