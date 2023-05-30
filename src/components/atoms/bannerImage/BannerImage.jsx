import React from "react"
import {BannerImageWrap} from "./BannerImage.styled"
import Image from "next/image"

export const BannerImage = ({image, currentImage}) => {
  return (
    <BannerImageWrap>
      <Image
        src={image[currentImage]?.src}
        alt='error'
        width={500}
        height={500}
      />
      <p>{image[currentImage]?.id}</p>
    </BannerImageWrap>
  )
}
