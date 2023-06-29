import styled from 'styled-components';

const ConfirmWrap = styled.section`
  .confirm-text-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 6.25rem;
    width: 18.1875rem;
    #dialog1Title {
      white-space: pre-line;
      text-align: center;
      font-size: 0.8125rem;
    }
  }

  .confirm-btn-wrap {
    display: flex;
    background-color: #ffffff;
    border-top: 1px solid #000;
    font-weight: 400;

    span {
      color: #000;
      font-size: 0.8125rem;
    }
  }
`;

export { ConfirmWrap };
