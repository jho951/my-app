import styled from 'styled-components';

const AlertWrap = styled.section`
  .alert-text-wrap {
    display: inline-block;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: black;
    height: 6.25rem;
    width: 18.1875rem;

    p {
      margin: 0;
      white-space: pre-line;
      text-align: center;
      font-size: 0.8125rem;
      margin-bottom: 7px;
    }
  }

  .alert-footer {
    background-color: #ffffff;
    border-top: 1px solid #000;

    p {
      font-weight: 400;
      color: black;
      font-size: 0.8125rem;
    }
  }
`;

export { AlertWrap };
