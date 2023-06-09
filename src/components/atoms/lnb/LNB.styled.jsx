import styled from "styled-components"

const LnbWrap = styled.div`
  width: 100%;
  display: block;
  /* display: ${({showLnb}) => (showLnb ? "block" : "none")}; */
  ul {
    background-color: white;

    a {
      color: #000000;
      text-decoration: none;
    }
  }
`

export {LnbWrap}
