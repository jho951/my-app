import styled from "styled-components";

const GNBWrap = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${(props) => props.theme.primary};
  ul {
    font-size: 1rem;
  }
`;

export { GNBWrap };
