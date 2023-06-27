import styled from 'styled-components';

const TextAreaContainer = styled.div`
  width: 502px;
  padding: 30px 27px;
  border: 1px solid black;
  max-height: 228px;
  overflow: scroll;
  border-radius: 5px;
  font-size: ${(props) => props.theme.fontSize.m};

  pre {
    width: 388px;
    white-space: pre-wrap;
  }
  /* 스크롤바 스타일링 */
  ::-webkit-scrollbar {
    width: 50px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #999;
    border: 23px solid #fff;
  }

  ::-webkit-scrollbar-thumb:hover {
    border: 22px solid #fff;
  }
`;

export { TextAreaContainer };
