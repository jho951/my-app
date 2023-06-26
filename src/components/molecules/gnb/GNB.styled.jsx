import styled from 'styled-components';
import { DESKTOP } from '../../../styles/GlobalStyled';

const GnbWrap = styled.ul`
  ${DESKTOP} {
    width: 100%;
    max-width: 671px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 84px;
    font-size: ${(props) => props.theme.fontSize.m};
    font-weight: 700;
    white-space: nowrap;
    ul {
    }
    li {
      min-width: 63px;
      max-width: 94px;
      :hover {
        color: ${(props) => props.theme.primary};
      }
    }

    .active {
      color: ${(props) => props.theme.primary};
    }
  }
`;

export { GnbWrap };
