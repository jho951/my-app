import {useEffect, useRef, useState} from "react"
import {atom, useAtom} from "jotai"

import {IMG_PATH} from "../../../utils/constants/project"
import {BannerItemsWrap, ControllWrap} from "./BannerItems.styled"
import {CustomButton} from "../../atoms/button/Button"
import {BsFillPauseCircleFill, BsFillPlayCircleFill} from "react-icons/bs"
import {GrFormPrevious, GrFormNext} from "react-icons/gr"
import {CustomImage} from "../../atoms/Image/Image"
const imageAtom = atom(0)

export const BannerItems = () => {
  const [currentImage, setCurrentImage] = useAtom(imageAtom)
  const [isPlaying, setIsPlaying] = useState(true)
  const progressRef = useRef(null)
  const image = [
    {src: `${IMG_PATH}/test.png`, id: 1},
    {src: `${IMG_PATH}/test.png`, id: 2},
    {src: `${IMG_PATH}/test.png`, id: 3},
    {src: `${IMG_PATH}/test.png`, id: 4},
    {src: `${IMG_PATH}/test.png`, id: 5},
  ]
  useEffect(() => {
    const timer = setInterval(() => {
      if (isPlaying) {
        setCurrentImage((prevSlide) => (prevSlide + 1) % image.length)
      }
    }, 5000)
    return () => {
      clearInterval(timer)
    }
  }, [isPlaying])

  useEffect(() => {
    const progressBar = progressRef.current
    const totalImages = image.length
    const width = ((currentImage + 1) / totalImages) * 100
    progressBar.style.width = `${width}%`
  }, [currentImage])

  const handlePrevSlide = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + image.length) % image.length
    )
  }

  const handleNextSlide = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % image.length)
  }
  const handleTogglePlay = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying)
  }

  return (
    <>
      <BannerItemsWrap>
        <CustomImage image={image} currentImage={currentImage} />
      </BannerItemsWrap>
      <ControllWrap>
        <CustomButton className={"icon-btn"} onClick={handleTogglePlay}>
          {isPlaying ? <BsFillPauseCircleFill /> : <BsFillPlayCircleFill />}
        </CustomButton>
        <CustomButton className={"icon-btn"} onClick={handlePrevSlide}>
          {<GrFormPrevious />}
        </CustomButton>
        <CustomButton className={"icon-btn"} onClick={handleNextSlide}>
          {<GrFormNext />}
        </CustomButton>
        <div className='index-pointer'>
          <h3 className='current-number'>{currentImage + 1}</h3>
          <div style={{width: "200px"}}>
            <span className='progress-bar' ref={progressRef} />
          </div>
          <h3 className='total-number'>{image.length}</h3>
        </div>
      </ControllWrap>
    </>
  )
}
