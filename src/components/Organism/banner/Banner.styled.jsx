import styled, {css} from "styled-components"
import {TabletScreen, WebScreen} from "../../../styles/GlobalStyled"

const CommonBannerStyles = css`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  img {
    width: 100%;
    height: auto;
  }
  .banner-images {
    width: 100%;
    display: flex;
    justify-content: center;
    aspect-ratio: 16 / 7;
    overflow: hidden;
  }
`
const BannerWrap = styled.div`
  ${CommonBannerStyles}

  .banner-images {
    ${WebScreen} {
      max-width: 1920px;
    }
    ${TabletScreen} {
    }
  }
`
export {BannerWrap}
