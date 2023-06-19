import styled from "styled-components"
import {
  MobileScreen,
  TabletScreen,
  WebScreen,
} from "../../../styles/GlobalStyled"

export const SideBarContainer = styled.aside`
  ${WebScreen} {
    width: 72px;
    top: 120px;
    display: flex;
    gap: 32px;
    flex-direction: column;
    position: fixed;
    right: 91px;
    z-index: 10;
  }

  ${TabletScreen} {
    display: none;
  }
  ${MobileScreen} {
    display: none;
  }
`
