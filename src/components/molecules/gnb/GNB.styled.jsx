import styled from "styled-components";
import { WebScreen } from "../../../styles/GlobalStyled";

const GnbWrap = styled.nav`
  ${WebScreen} {
    display: flex;
    justify-content: space-around;
    align-items: end;
    position: relative;
    font-size: ${(props) => props.theme.fontSize.gnb};
    font-weight: 700;
    width: 976px;
    min-width: 508px;
    flex: 0 0 auto;
    .active {
      color: ${(props) => props.theme.subColor};
    }
  }
`;

export { GnbWrap };
