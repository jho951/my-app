import styled from 'styled-components';

const AlertWrap = styled.section`
  .alert-text-wrap {
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

  .alert-btn-wrap {
    background-color: #ffffff;
    border-top: 1px solid #000;
    font-weight: 400;
    span {
      color: #000;
      font-size: 0.8125rem;
    }
  }
`;

export { AlertWrap };
