import styled from 'styled-components';
import { DESKTOP } from '../../../styles/GlobalStyled';

const ContentsWrap = styled.main`
  ${DESKTOP} {
    max-width: 1920px;
    margin: 0 auto;
    min-height: 1000px;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.textColor};
  }
`;

export { ContentsWrap };
