import styled from "styled-components"
import {
  MobileScreen,
  TabletScreen,
  WebScreen,
} from "../../../styles/GlobalStyled"

export const SideBarContainer = styled.aside`
  ${WebScreen} {
    display: flex;
    gap: 32px;
    flex-direction: column;
    position: fixed;
    top: 164px;
    right: 91px;
    width: 72px;
    z-index: 10;
  }
  ${TabletScreen} {
    display: none;
  }
  ${MobileScreen} {
    display: none;
  }
`
