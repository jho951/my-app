import Image from 'next/image';
import PropTypes from 'prop-types';

import { useImageSize } from '../../../utils/utils';

export const CustomImage = ({ image, currentImage, alt, priority = false, quality = 70 }) => {
  // 다수의 이미지의 경우 currentImage(jotai) 를 사용합니다.
  const imageSrc = currentImage >= 0 ? image[currentImage]?.src : image;
  const { width, height, isLoaded } = useImageSize(imageSrc);
  const loader = () => {
    return `${imageSrc}?w=${width}&q=${quality}`;
  };

  return (
    isLoaded && (
      <Image
        src={imageSrc}
        alt={alt}
        width={width}
        loader={loader}
        height={height}
        priority={priority}
        placeholder="blur"
        blurDataURL="/blurImg.png"
        quality={quality}
        style={{
          WebkitUserDrag: 'none',
        }}
      />
    )
  );
};

///////////////////////////
//// props 자료 타입입니다.///
/////////////////////////

CustomImage.propTypes = {
  image: PropTypes.oneOfType([PropTypes.array, PropTypes.string]), // 이미지 배열
  currentImage: PropTypes.number, // 현재 이미지 인덱스
  alt: PropTypes.string, // 대체 텍스트
  priority: PropTypes.bool, // 우선 순위
  quality: PropTypes.number, // 이미지 품질
};
