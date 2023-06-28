import styled from 'styled-components';

const SelectWrap = styled.div`
  width: 100%;
  border: 1px solid black;
  max-width: ${(props) => props.maxWidth || '100%'};
  padding: 0 20px 0 10px;
  button {
    display: flex;
    justify-content: space-between;
    color: #9a9898;
  }
`;

const SelectOption = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  position: relative;
  top: -10px;
  left: 5%;
  justify-items: center;
  font-size: ${(props) => props.theme.l};
  border-radius: 5px;
  border: 1px solid black;
  background-color: #ffffff;

  li {
    border: 1px solid #d9d9d9;

    :nth-child(1) {
      border-right: none;
      border-bottom: none;
    }
    :last-child {
      border: none;
    }

    display: inline-block;
    position: relative;
    width: 50%;
    vertical-align: top;
    padding: 1rem;
    cursor: pointer;
    :hover {
      background-color: ${(props) => props.theme.primary};
    }
  }
`;

export { SelectWrap, SelectOption };
