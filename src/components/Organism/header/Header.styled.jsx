import styled, { css } from 'styled-components';
import { CONTENTS_WIDTH, DESKTOP, TABLET } from '../../../styles/GlobalStyled';

const CommonHeaderStyles = css`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0%;
  background-color: rgba(25, 25, 25, 0.1);
  color: #fdfdfd;
  z-index: 10;
  .heder-wrap {
    display: flex;
    justify-content: space-between;
    width: ${CONTENTS_WIDTH};
    max-width: 1408px;
    margin: auto;
    .header-account {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      max-width: 173px;
      font-size: ${(props) => props.theme.fontSize.m};
    }
  }
`;

const HeaderContainer = styled.header`
  ${CommonHeaderStyles}
  ${DESKTOP} {
  }
  ${TABLET} {
  }
`;

export { HeaderContainer };
