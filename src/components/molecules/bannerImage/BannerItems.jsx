import {useEffect, useRef, useState} from "react"

import {ControllWrap} from "./BannerItems.styled"
import {CustomButton} from "../../atoms/button/Button"

import {FiPause, FiPlay} from "react-icons/fi"
import {GrFormPrevious, GrFormNext} from "react-icons/gr"

export const BannerItems = ({image, currentImage, setCurrentImage}) => {
  const [isPlaying, setIsPlaying] = useState(true)
  const progressRef = useRef(null)

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
    <ControllWrap>
      <div className='play-elem'>
        <CustomButton className={"icon-btn"} onClick={handleTogglePlay}>
          {isPlaying ? <FiPause /> : <FiPlay />}
        </CustomButton>
        <div className='next-prev-btn'>
          <CustomButton className={"icon-btn"} onClick={handlePrevSlide}>
            <GrFormPrevious />
          </CustomButton>
          <CustomButton className={"icon-btn"} onClick={handleNextSlide}>
            {<GrFormNext />}
          </CustomButton>
        </div>
      </div>
      <div className='index-pointer'>
        <p className='current-number'>{currentImage + 1}</p>
        <div className='progress'>
          <span className='progress-bar' ref={progressRef} />
        </div>
        <p className='total-number'>{image.length}</p>
      </div>
    </ControllWrap>
  )
}
