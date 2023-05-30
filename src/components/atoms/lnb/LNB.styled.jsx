import styled from "styled-components"

const LnbWrap = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  display: ${({showLnb}) => (showLnb ? "block" : "none")};
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    .lnb-item {
      padding: 10px;
    }

    .lnb-item a {
      color: #fff;
      text-decoration: none;
    }
  }
`

export {LnbWrap}
