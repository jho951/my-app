import styled from 'styled-components';

const AlertWrap = styled.section`
  .alert-text-wrap {
    display: inline-block;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: black;

    p {
      margin: 0;
      white-space: pre-line;
      text-align: center;
      font-size: 15px;

      margin-bottom: 7px;
    }
    b {
      color: red;
      font-weight: 900;
    }
  }

  .alert-footer {
    align-self: flex-end;
    width: 100%;
    height: 50px;
    border-top: 1px solid black;
    display: flex;
    justify-content: center;
  }

  #customBtnClose {
    p {
      font-weight: 600;
      border-right: 1px solid black;
      color: red;
    }
  }

  #customBtnSelect {
    p {
      font-weight: 700;
      color: red;
    }
  }
`;

export { AlertWrap };
