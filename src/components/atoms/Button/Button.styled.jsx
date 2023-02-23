import styled, {keyframes} from "styled-components"

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`

export const CustomButton = styled.button`
  padding: ${(props) => props.theme?.padding?.base || "2%"};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background: ${(props) => props.color || `none`};
  color: ${(props) => props.textColor || "black"};
  border-radius: ${(props) => props.borderRadius || "10px"};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${({theme}) => theme.colors?.primaryDark || "gainsboro"};
    animation: ${pulse} 0.5s ease-in-out;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({theme}) => theme.colors?.primaryLight || "gray"};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
