import styled from "styled-components"

const ModalOverLay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0);
`
const ModalWrap = styled.div`
  margin: auto;
  width: 500px;
  height: 500px;
  .modal-header {
    background-color: ${(props) => props.backgroundColor || "white"};
  }
  .modal-content {
    width: 500px;
    height: 500px;
    background-color: ${(props) => props.backgroundColor || "white"};
  }
`

export {ModalOverLay, ModalWrap}
