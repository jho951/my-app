import Image from "next/image"
import {useImageSize} from "../../../utils/utils"
import {ImageLoading, BannerImageLoading} from "./Image.styled"

export const CustomImage = ({image, currentImage, alt, priority = false}) => {
  const imageSrc = currentImage >= 0 ? image[currentImage]?.src : image
  const {width, height, isLoaded} = useImageSize(imageSrc)

  return !isLoaded ? (
    imageSrc === image[currentImage]?.src ? (
      <BannerImageLoading />
    ) : (
      <ImageLoading width={width} height={height} />
    )
  ) : (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      priority={priority ? true : false}
      blurDataURL='/blurImg.png'
    />
  )
}
