import styled from "styled-components";

const BannerItemsWrap = styled.figure`
  position: relative;
  width: 400px;
  height: 200px;
`;

const ControllWrap = styled.section`
  display: flex;
  position: absolute;
  top: 80%;
  left: 2%;
  align-items: center;
  width: 360px;
  height: 50px;
  border-radius: 10px;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
  background-color: white;
  .index-pointer {
    display: flex;
    align-items: center;
    gap: 10px;
    .current-number {
      font-size: ${(props) => props.theme.fontSize.text};
      width: 10px;
    }
    .total-number {
      font-size: ${(props) => props.theme.fontSize.text};
      width: 10px;
    }
    .progress-bar {
      display: block;
      width: ${(props) => props.width}%;
      border: 1px solid black;
      height: 1px;
      background-color: #a04caf;
      transition: width 0.3s;
    }
  }
`;

export { BannerItemsWrap, ControllWrap };
