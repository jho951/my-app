import {atom} from "jotai"
import {IMG_PATH} from "../../../utils/constants/project"
import {BannerItems} from "../../molecules/bannerImage/BannerItems"
import {BannerWrap} from "./Banner.styled"

const imageAtom = atom(0)
const Banner = () => {
  const image = [
    {src: `${IMG_PATH}/test.png`, id: 1},
    {src: `${IMG_PATH}/testImg.png`, id: 2},
    {src: `${IMG_PATH}/happyMedion.png`, id: 3},
    {src: `${IMG_PATH}/test.png`, id: 4},
    {src: `${IMG_PATH}/fnbLogo.png`, id: 5},
  ]
  return (
    <BannerWrap>
      <BannerItems image={image} imageAtom={imageAtom} />
    </BannerWrap>
  )
}

export default Banner
