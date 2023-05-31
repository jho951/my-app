import styled from "styled-components"

const FnbWrap = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.footer.background};
  color: ${(props) => props.theme.footer.text};
  display: flex;
  justify-content: end;
`

export {FnbWrap}
