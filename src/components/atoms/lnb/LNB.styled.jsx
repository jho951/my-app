import styled from "styled-components"

const LnbWrap = styled.ul`
  width: 100%;
  transition: 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 120px;
  position: absolute;
  top: 120px;
  left: 0;
  z-index: -1;
  background-color: ${(props) => props.theme.disabled};

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
