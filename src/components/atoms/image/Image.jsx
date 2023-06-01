import Image from "next/image"
import {calculateHeight} from "../../../utils/utils"

export const CustomImage = ({image, currentImage, alt, width, aspectRatio}) => {
  const height = calculateHeight(width, aspectRatio)

  const imageSrc = currentImage >= 0 ? image[currentImage]?.src : image
  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      placeholder='blur'
      blurDataURL='/blurImg.png'
    />
  )
}
