import styled from "styled-components"

const GnbWrap = styled.nav`
  display: flex;
  justify-content: center;
  align-items: end;
  position: relative;
  font-size: ${(props) => props.theme.fontSize.gnb};
  font-weight: 700;
  gap: 8.4rem;
  flex: 0 0 auto;
  .active {
    color: ${(props) => props.theme.subColor};
  }
`

export {GnbWrap}
