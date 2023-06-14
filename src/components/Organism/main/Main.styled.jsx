import styled from "styled-components"
import {WebScreen} from "../../../styles/GlobalStyled"
const MainWrap = styled.main`
  ${WebScreen} {
    max-width: 1920px;
    margin: 0 auto;
    min-height: 1000px;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.textColor};
  }
`

export {MainWrap}
