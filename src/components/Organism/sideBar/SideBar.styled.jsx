import styled from 'styled-components';
import { MOBILE, TABLET, DESKTOP } from '../../../styles/GlobalStyled';

export const SideBarContainer = styled.aside`
  ${DESKTOP} {
    width: 72px;
    top: 120px;
    display: flex;
    gap: 32px;
    flex-direction: column;
    position: fixed;
    right: 91px;
    z-index: 10;
  }

  ${TABLET} {
    display: none;
  }
  ${MOBILE} {
    display: none;
  }
`;
