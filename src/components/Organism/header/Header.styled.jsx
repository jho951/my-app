import styled, { css } from "styled-components";
import { TabletScreen, WebScreen } from "../../../styles/GlobalStyled";

const CommonHeaderStyles = css`
  width: 100%;
  height: 120px;
  display: flex;
  position: fixed;
  align-items: flex-end;
  top: 0%;
  background-color: rgba(25, 25, 25, 0.1);
  color: #fdfdfd;
  z-index: 100;

  .header-account {
    color: #fdfdfd;
    font-size: 1.6rem;
  }
`;

const HeaderContainer = styled.div`
  ${CommonHeaderStyles}
  ${WebScreen} {
    .heder-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      width: calc(100% - 64px);
      max-width: 1408px;
    }
  }
  ${TabletScreen} {
    padding: 0 2vw;
  }
`;

export { HeaderContainer };
