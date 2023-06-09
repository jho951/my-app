import styled, {css} from "styled-components"
import {TabletScreen, WebScreen} from "../../../styles/GlobalStyled"

const CommonHeaderStyles = css`
  display: flex;
  width: 100%;
  height: 120px;
  position: fixed;
  align-items: center;
  top: 0%;
  background-color: rgba(25, 25, 25, 0.1);
  color: #fdfdfd;
  z-index: 100;
  .header-account {
    color: #fdfdfd;
    font-size: 1.6rem;
  }
`

const HeaderContainer = styled.header`
  ${CommonHeaderStyles}
  ${WebScreen} {
    .heder-wrap {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin: 0 auto;
      width: ${(props) => props.theme.contents};
      max-width: 1408px;
      .header-account {
        display: flex;
        justify-content: space-between;
        width: 225px;
        button {
          color: ${(props) => props.theme.subColor};
        }
      }
    }
  }
  ${TabletScreen} {
    padding: 0 2vw;
  }
`

export {HeaderContainer}
