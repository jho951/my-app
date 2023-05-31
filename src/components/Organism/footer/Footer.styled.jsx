import styled from "styled-components";

const FooterWrap = styled.div`
  width: 100%;
  border: 1px solid red;
  height: 300px;
  background-color: ${(props) => props.theme.footer.background};
  color: ${(props) => props.theme.footer.text};
`;

export { FooterWrap };
