import Image from "next/image"
import {useImageSize} from "../../../utils/utils"

export const CustomImage = ({image, currentImage, alt, priority}) => {
  const imageSrc = currentImage >= 0 ? image[currentImage]?.src : image
  const {width, height, isLoaded} = useImageSize(imageSrc)

  return !isLoaded ? (
    <div style={{width: "100%", height: "100%", backgroundColor: "#d9d9d9"}} />
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
