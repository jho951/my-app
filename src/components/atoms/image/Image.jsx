import React from "react"
import Image from "next/image"

export const CustomImage = ({image, currentImage, alt}) => {
  return (
    <>
      <Image
        src={currentImage ? image[currentImage]?.src : image}
        alt={alt}
        layout='fill'
        placeholder='blur'
        blurDataURL='/blurImg.png'
      />
    </>
  )
}
