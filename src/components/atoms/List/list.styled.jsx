import styled from "styled-components"

const ListWrap = styled.div`
  border: 1px solid black;
`
const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`
export {ListWrap, ListContainer}
