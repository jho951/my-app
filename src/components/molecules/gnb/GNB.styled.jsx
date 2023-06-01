import styled from "styled-components"

const GnbWrap = styled.nav`
  display: flex;
  justify-content: center;
  align-items: end;
  position: relative;
  font-size: ${(props) => props.theme.fontSize.gnb};
  font-weight: 700;
  .gnb-element {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 70px;
  }
  .active {
    color: ${(props) => props.theme.subColor};
  }
`

export {GnbWrap}
