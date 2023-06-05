import styled, {css} from "styled-components"
import {TabletScreen, WebScreen} from "../../../styles/GlobalStyled"

const CommonBannerStyles = css`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  img {
    width: 100%;
  }
`
const BannerWrap = styled.div`
  ${CommonBannerStyles}

  .banner-images {
    ${WebScreen} {
      width: 100%;
      display: flex;
      justify-content: center;
      max-width: 1920px;
    }
    ${TabletScreen} {
    }
  }
`
export {BannerWrap}
