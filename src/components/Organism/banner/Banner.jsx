import {atom} from "jotai"
import {useAtom} from "jotai"
import {IMG_PATH} from "../../../utils/constants/project"
import {CustomImage} from "../../atoms/Image/Image"
import {BannerItems} from "../../molecules/bannerItems/BannerItems"
import {BannerWrap} from "./Banner.styled"

const imageAtom = atom(0)
const Banner = () => {
  const [currentImage, setCurrentImage] = useAtom(imageAtom)
  const image = [
    {src: `${IMG_PATH}/test.png`, id: 1},
    {src: `${IMG_PATH}/testImg.png`, id: 2},
    {src: `${IMG_PATH}/happyMedion.png`, id: 3},
    {src: `${IMG_PATH}/test.png`, id: 4},
    {src: `${IMG_PATH}/fnbLogo.png`, id: 5},
  ]
  return (
    <BannerWrap>
      <figure className='banner-images'>
        <CustomImage
          image={image}
          currentImage={currentImage}
          alt='banner-image'
        />
      </figure>
      <div className='banner-control'>
        <BannerItems
          image={image}
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
        />
      </div>
    </BannerWrap>
  )
}

export default Banner
