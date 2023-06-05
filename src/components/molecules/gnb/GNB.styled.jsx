import styled from "styled-components"
import {WebScreen} from "../../../styles/GlobalStyled"

const GnbWrap = styled.nav`
  ${WebScreen} {
    display: flex;
    justify-content: space-between;
    align-items: end;
    position: relative;
    font-size: ${(props) => props.theme.fontSize.gnb};
    font-weight: 700;
    max-width: 950px;
    min-width: 634px;
    .active {
      color: ${(props) => props.theme.primary};
    }
  }
`

export {GnbWrap}
