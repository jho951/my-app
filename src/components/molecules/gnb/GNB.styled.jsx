import styled from "styled-components"

const GnbWrap = styled.nav`
  display: flex;
  justify-content: center;
  align-items: end;
  position: relative;
  font-size: ${(props) => props.theme.fontSize.gnb};
  .gnb-element {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 30px;
  }
  .active {
    font-weight: 700;
  }
`

export {GnbWrap}
