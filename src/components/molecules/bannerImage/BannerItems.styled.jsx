import styled, {keyframes} from "styled-components"

const fillAnimation = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`

const BannerItemsWrap = styled.figure`
  display: flex;
  width: 100%;

  .progress-bar {
    width: 100px;
    height: 15px;
    background-color: #d9d9d9;
    border-radius: 10px;
    overflow: hidden;
  }
`
const ProgressBarFill = styled.div`
  height: 100%;
  background-color: #a04caf;
  animation: ${fillAnimation} 5s linear forwards;
`

export {BannerItemsWrap, ProgressBarFill}
