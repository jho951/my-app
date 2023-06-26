import styled from 'styled-components';

export const SelectWrap = styled.div`
  width: 100%;
  ul {
    display: flex;
    flex-wrap: wrap;
    width: 300px;
    position: relative;
    top: -10px;
    left: 5%;
    justify-items: center;
    font-size: 1.8rem;
    border-radius: 5px;
    border: 1px solid black;
    background-color: #ffffff;
    li {
      :nth-child(1) {
        border-right: none;
        border-bottom: none;
      }

      border: 1px solid #d9d9d9;
      display: inline-block;
      position: relative;
      width: 50%;
      vertical-align: top;
      padding: 1rem;
      cursor: pointer;
      :hover {
        background-color: #7e57e1;
      }
    }
  }
`;
