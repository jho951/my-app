import Image from 'next/image';
import PropTypes from 'prop-types';

import { IMG_PATH } from '../../../utils/constants/project';
import { useImageSize } from '../../../utils/utils';

export const CustomImage = ({ image, currentImage, alt, priority, quality }) => {
  const imageSrc = image[currentImage]?.src || image;

  const { width, height, isLoaded } = useImageSize(imageSrc);

  return (
    isLoaded && (
      <Image
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        placeholder={width >= 40 && height >= 40 ? 'blur' : 'empty'}
        blurDataURL={`${IMG_PATH}/blurImg.png`}
        quality={quality}
        style={{
          WebkitUserDrag: 'none',
        }}
      />
    )
  );
};

// props 자료 타입입니다.

CustomImage.propTypes = {
  image: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  currentImage: PropTypes.number,
  alt: PropTypes.string,
  priority: PropTypes.bool,
  quality: PropTypes.number,
};

CustomImage.defaultProps = {
  image: [],
  currentImage: 0,
  alt: '',
  priority: false,
  quality: 70,
};
