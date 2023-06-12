import styled, {css} from "styled-components"
import {TabletScreen, WebScreen} from "../../../styles/GlobalStyled"

const CommonHeaderStyles = css`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0%;
  width: 100%;
  height: 120px;
  background-color: rgba(25, 25, 25, 0.1);
  color: #fdfdfd;
  z-index: 100;
  .heder-wrap {
    display: flex;
    justify-content: space-between;
    width: ${(props) => props.theme.contents};
    max-width: 1408px;
    margin: 0 auto;
    .header-account {
      display: flex;
      justify-content: space-between;
      max-width: 225px;
      button {
        color: ${(props) => props.theme.subColor};
      }
    }
  }
  .header-account {
    color: #fdfdfd;
    font-size: 1.6rem;
  }
`

const HeaderContainer = styled.header`
  ${CommonHeaderStyles}
  ${WebScreen} {
  }
  ${TabletScreen} {
  }
`

export {HeaderContainer}
