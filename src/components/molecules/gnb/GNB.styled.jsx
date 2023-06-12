import styled from "styled-components"
import {WebScreen} from "../../../styles/GlobalStyled"

const GnbWrap = styled.ul`
  ${WebScreen} {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 84px;
    position: relative;
    font-size: ${(props) => props.theme.fontSize.m};
    font-weight: 700;

    .gnb-menu {
    }
    .active {
      color: ${(props) => props.theme.primary};
    }
  }
`

export {GnbWrap}
