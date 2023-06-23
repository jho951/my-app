import styled from 'styled-components';
import { DESKTOP } from '../../../styles/GlobalStyled';

const FnbWrap = styled.ul`
  ${DESKTOP} {
    display: flex;
    justify-content: space-between;
    position: relative;
    width: 100%;
  }
`;

export { FnbWrap };
