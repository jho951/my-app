import styled, {keyframes} from "styled-components"

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
`
const InputWrap = styled.div`
  position: relative;
`

const Input = styled.input`
  font-size: 1rem;
  height: 1rem;
  border-radius: 0.25rem;
  border: 1px solid var(--gray-color-1);
  padding: 1rem;
  outline: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  animation: ${fadeIn} 0.3s ease-in-out;
  animation-fill-mode: both;
  :focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 0.2rem rgba(23, 112, 207, 0.25);
  }
  input[disabled] {
    opacity: 0.5;
  }
`
const Icon = styled.i`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`

export {InputContainer, InputWrap, Input, Icon}
