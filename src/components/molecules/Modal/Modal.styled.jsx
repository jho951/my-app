import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 0;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 101;
  opacity: 1;
  pointer-events: auto;
  transition: opacity 0.3s;
`;

const ModalWrap = styled.div`
  width: ${(props) => props.width || '291px'};
  height: ${(props) => props.height || '100px'};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 105;
  background-color: ${(props) => props.theme.background};

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
`;

export { ModalWrap, ModalContainer };

// height: fit-content;

// const ModalOverLay = styled.div`
//   position: fixed;
//   width: 500px;
//   height: 500px;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   background: rgba(0, 0, 0, 0.5); /* 변경된 배경색 */
//   z-index: 100;
// `;
