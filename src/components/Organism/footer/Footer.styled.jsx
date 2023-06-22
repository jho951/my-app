import styled, {css} from "styled-components"
import {DESKTOP} from "../../../styles/GlobalStyled"

const CommonFooterStyles = css`
  display: flex;
  width: 100%;
  height: 176px;
  background-color: ${(props) => props.theme.footer};
  color: ${(props) => props.theme.subColor};
  align-items: center;
`
const FooterWrap = styled.footer`
  ${CommonFooterStyles}
  ${DESKTOP} {
    .footer-wrap {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      width: calc(100% - 64px);
      max-width: 1408px;
      .footer-logo {
        display: flex;
        flex-direction: column;
        gap: 18px;
        p {
          font-size: 1.4rem;
          font-weight: 700;
        }
      }
    }
    .footer-menu {
      display: flex;
      justify-content: space-between;
      width: 225px;
      button {
        color: ${(props) => props.theme.subColor};
      }
    }
  }
`

export {FooterWrap}
