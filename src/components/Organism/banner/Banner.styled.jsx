import styled, {css} from "styled-components"
import {
  MobileScreen,
  TabletScreen,
  WebScreen,
} from "../../../styles/GlobalStyled"

const CommonBannerStyles = css`
  .banner-images {
    width: 100%;
    display: flex;
    justify-content: center;
    aspect-ratio: 16 / 7;
    overflow: hidden;
    cursor: pointer;

    img {
      width: 100%;
      height: auto;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -o-user-select: none;
      user-select: none;
      -webkit-user-drag: none;
      -khtml-user-drag: none;
      -moz-user-drag: none;
      -o-user-drag: none;
      cursor: pointer;
    }
  }
  .banner-control {
    position: relative;
    margin: 0 auto;
    bottom: 0;
    width: ${(props) => props.theme.contents};
    max-width: 1408px;
    display: flex;
    justify-content: end;
  }
`
const BannerWrap = styled.figure`
  ${CommonBannerStyles}
  .banner-images {
    ${WebScreen} {
      max-width: 1920px;
    }
  }
  ${TabletScreen} {
    .banner-control {
      width: 100%;
      bottom: 0px;
      display: block;
    }
  }
  ${MobileScreen} {
    .banner-control {
      width: 100%;
      bottom: 0px;
      display: block;
    }
  }
`
export {BannerWrap}
