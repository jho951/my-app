import styled from "styled-components"
import {MobileScreen, WebScreen} from "../../../styles/GlobalStyled"

const HeaderWrap = styled.div`
  width: 100%;
  display: grid;
  ${WebScreen} {
    grid-template-columns: 1fr 2.5fr 1fr;
    gap: 10px;
    border: 1px solid green;
  }
  ${MobileScreen} {
    display: none;
  }

  .header-image {
    border: 1px solid green;
    cursor: pointer;
    width: 150px;
    height: 50px;
    position: relative;
    align-items: baseline;
  }
`

export {HeaderWrap}
