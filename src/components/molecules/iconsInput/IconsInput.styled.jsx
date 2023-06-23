import styled, { css } from 'styled-components';

const IconsInputWrap = styled.div`
  display: flex;
  width: 688px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #d9d9d9;

  ${({ isFocused }) =>
    isFocused &&
    css`
      border: 1px solid red;
    `}

  input {
    border: none;
    :focus {
      border: none;
      outline: none;
    }
  }

  .side-icon-container {
    display: flex;
    gap: 5px;
  }

  .input-icons {
    display: flex;
    cursor: pointer;
  }
`;

export { IconsInputWrap };
