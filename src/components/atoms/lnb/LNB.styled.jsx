import styled from "styled-components"
import {GnbWrap} from "../../molecules/gnb/GNB.styled"

const LnbWrap = styled.ul`
  width: 200px;
  transition: 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: ${(props) => props.theme.disabled};
  position: absolute;
  top: 120px;
  left: 0;
  z-index: -1;

  ${GnbWrap}:hover & {
    z-index: 1;
  }

  li {
    width: 100%;
    max-width: 508px;
    margin: 0 auto;
    width: ${(props) => props.theme.contents};
    color: ${(props) => props.theme.background};
    text-decoration: none;
  }
`
export {LnbWrap}
