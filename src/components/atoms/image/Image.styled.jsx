import styled from "styled-components"

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  opacity: ${({currentImage}) => (currentImage === 0 ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`

export {ImageWrap}
