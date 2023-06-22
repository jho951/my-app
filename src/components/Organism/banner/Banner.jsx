import { useRef, useState } from 'react';
import { atom } from 'jotai';
import { useAtom } from 'jotai';
import { IMG_PATH } from '../../../utils/constants/project';
import { CustomImage } from '../../atoms/image/Image';
import { BannerItems } from '../../molecules/bannerItems/BannerItems';
import { BannerWrap } from './Banner.styled';

const image = [
  { src: `${IMG_PATH}/happyMedion.png`, id: 1 },
  { src: `${IMG_PATH}/blurImg.png`, id: 2 },
  { src: `${IMG_PATH}/happyMedion.png`, id: 3 },
  { src: `${IMG_PATH}/fnbLogo.png`, id: 4 },
  { src: `${IMG_PATH}/fnbLogo.png`, id: 5 },
];
const imageAtom = atom(0);
const Banner = () => {
  const bannerRef = useRef(null);
  const [currentImage, setCurrentImage] = useAtom(imageAtom);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragEndX, setDragEndX] = useState(0);
  const [transitionStyle, setTransitionStyle] = useState(null);

  const handleDragStart = (e) => {
    setDragStartX(e.clientX);
    setTransitionStyle(null);
  };

  const handleDragEnd = (e) => {
    setDragEndX(e.clientX);
    const dragDistance = dragEndX - dragStartX;
    if (dragDistance > 0) {
      setCurrentImage((prevImage) => (prevImage - 1 + image.length) % image.length);
    } else if (dragDistance < 0) {
      setCurrentImage((prevImage) => (prevImage + 1) % image.length);
    }
    setTransitionStyle('transform 0.3s ease-in-out');
  };

  return (
    <BannerWrap>
      <div
        className="banner-images"
        ref={bannerRef}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        style={{ transition: transitionStyle }}
      >
        <CustomImage className="asdfasdf" image={image} currentImage={currentImage} alt="banner-image" priority />
      </div>
      <div className="banner-control">
        <BannerItems image={image} currentImage={currentImage} setCurrentImage={setCurrentImage} />
      </div>
    </BannerWrap>
  );
};

export default Banner;
