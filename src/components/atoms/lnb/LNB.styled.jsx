import styled from "styled-components"

const LnbWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: ${({showLnb}) => (showLnb ? "block" : "none")};
  background-color: black;
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    .lnb-item {
      padding: 10px;
    }

    .lnb-item a {
      color: blue;
      text-decoration: none;
    }
  }
`

export {LnbWrap}
