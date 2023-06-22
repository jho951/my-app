import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% {
    background-position: 100% 0; 
  }
  100% {
    background-position: 0 0; 
  }
`;

const ImageLoading = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  display: block;
  background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 80%), lightgray;
  background-repeat: repeat-y;
  background-size: 500% 100%;
  background-position: 100% 0;
  animation: ${gradientAnimation} 2s linear infinite;
  border-radius: 5px;
`;

const BannerImageLoading = styled.div`
  width: 100%;
  height: 100%;
  background-color: #d9d9d9;
`;

export { ImageLoading, BannerImageLoading };
