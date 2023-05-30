import styled from "styled-components"

const FnbWrap = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.footer};
  display: flex;
  justify-content: end;
  .fnb-list {
    padding: 0 20px;
    font-size: 0.6rem;
    color: #ffffff;
  }
`

export {FnbWrap}
