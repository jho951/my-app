import styled from "styled-components"

const BannerItemsWrap = styled.figure``

const ControllWrap = styled.section`
  width: 100%;
  display: flex;
  position: absolute;
  justify-content: space-evenly;
  right: 13%;
  bottom: 0%;
  align-items: center;
  max-width: 360px;
  height: 50px;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
  background-color: white;
  .play-elem {
    width: 100%;
    max-width: 103px;
    display: flex;
    justify-content: space-between;
    .next-prev-btn {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 60px;
    }
  }
  .index-pointer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 200px;
    .current-number {
      font-size: ${(props) => props.theme.fontSize.text};
      width: 12px;
      font-weight: bold;
    }
    .total-number {
      font-size: ${(props) => props.theme.fontSize.text};
      width: 10px;
    }
    .progress {
      width: 140px;
      padding: 0 8px;
      .progress-bar {
        display: block;
        max-width: ${(props) => props.width}%;
        border: 1px solid black;
        height: 1px;
        background-color: #a04caf;
        transition: width 0.3s;
      }
    }
  }
`

export {BannerItemsWrap, ControllWrap}
