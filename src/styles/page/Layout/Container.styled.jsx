import styled from "styled-components"

const Container = styled.div`
  width: ${(props) => props.theme.contents};
  padding-top: ${(props) => props.theme.padding};
  max-width: ${(props) => props.maxWidth || "1408px"};
  margin: 0 auto;
`

export {Container}
