import styled from "styled-components"

const FooterWrap = styled.div`
  width: 100%;
  height: 176px;
  background-color: ${(props) => props.theme.footer.background};
  color: ${(props) => props.theme.footer.text};
  padding: ${(props) => props.theme.padding};
`

export {FooterWrap}
