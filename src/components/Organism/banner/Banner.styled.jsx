import styled, { css } from "styled-components";

const CommonBannerStyles = css`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;

  .banner-images {
    display: flex;
    justify-content: center;
    max-width: 1408px;
  }
`;
const BannerWrap = styled.div`
  ${CommonBannerStyles}
`;
export { BannerWrap };
