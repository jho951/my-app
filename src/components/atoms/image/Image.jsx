// CustomImage.js 파일
import React from "react";
import Image from "next/image";

export const CustomImage = ({ image, currentImage, alt }) => {
  const imageSrc = currentImage >= 0 ? image[currentImage]?.src : image;
  return (
    <Image
      src={imageSrc}
      alt={alt}
      layout="fill"
      placeholder="blur"
      blurDataURL="/blurImg.png"
    />
  );
};
