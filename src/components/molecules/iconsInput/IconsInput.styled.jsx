import styled, { css } from 'styled-components';

const IconsInputWrap = styled.div`
  display: flex;
  width: 688px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #d9d9d9;

  input[type='search']::-webkit-search-cancel-button {
    -webkit-appearance: none;
    appearance: none;
    display: none;
  }

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
    align-items: center;
    gap: 5px;
  }

  .input-icons {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

export { IconsInputWrap };
