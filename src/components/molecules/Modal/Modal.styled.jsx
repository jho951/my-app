import styled from "styled-components"

const ModalOverLay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 100;
`
const ModalWrap = styled.div`
  width: 500px;
  height: 500px;
  height: fit-content;
  background-color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export {ModalOverLay, ModalWrap}
