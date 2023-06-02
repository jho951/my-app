import styled from "styled-components"

const MainWrap = styled.main`
  min-height: 1000px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.textColor};
`

export {MainWrap}
