import styled from "styled-components"
import {MobileScreen, WebScreen} from "../../../styles/GlobalStyled"

const HeaderWrap = styled.div`
  width: 100%;
  display: flex;
  padding: ${(props) => props.theme.header.padding};
  text-align: center;
  ${WebScreen} {
    position: fixed;
    top: 0%;
    z-index: 100;
    justify-content: space-around;
    align-items: center;
    background-color: ${(props) => props.theme.header.background};
    color: ${(props) => props.theme.header.text};
    z-index: 100;
    .header-image {
      cursor: pointer;
    }
    .header-account {
      color: ${(props) => props.theme.header.text};
      font-size: 1.6rem;
    }
  }
  ${MobileScreen} {
    display: none;
  }
`

export {HeaderWrap}
