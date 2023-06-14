import styled, {keyframes} from "styled-components"
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

const ModalOverLay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 11;
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
  .modal-overlay {
    display: flex;
    justify-content: right;
    .CloseButtonAnimated {
      animation: ${fadeIn} 0.3s ease-in-out;
      &:hover {
        animation: ${fadeOut} 0.3s ease-in-out;
        animation-fill-mode: forwards;
      }
    }
  }
`

export {ModalOverLay, ModalWrap}
