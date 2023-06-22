import styled from "styled-components"
import {DESKTOP} from "../../../styles/GlobalStyled"

const GnbWrap = styled.ul`
  ${DESKTOP} {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 84px;
    font-size: ${(props) => props.theme.fontSize.m};
    font-weight: 700;
    .active {
      color: ${(props) => props.theme.primary};
    }
  }
`

export {GnbWrap}
