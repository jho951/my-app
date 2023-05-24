import styled, {keyframes} from "styled-components"

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
export const Spinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid ${(props) => props.theme.button.progress};
  border-radius: 50%;
  width: ${(props) => props.width || "20px"};
  height: ${(props) => props.height || "20px"};
  position: relative;
  transform: translateX(-50%);
  animation: ${spin} 1s linear infinite;
`
