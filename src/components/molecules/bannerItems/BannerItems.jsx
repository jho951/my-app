import {useEffect, useRef, useState} from "react"
import {ControllWrap} from "./BannerItems.styled"
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
  }, [isPlaying, setCurrentImage, image.length])

  useEffect(() => {
    const progressBar = progressRef.current
    const totalImages = image.length
    const width = ((currentImage + 1) / totalImages) * 100
    progressBar.style.width = `${width}%`
  }, [currentImage, image.length])

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
    <ControllWrap width={((currentImage + 1) / image.length) * 100}>
      <div className='control-elem'>
        <ul className='change-banner-elem'>
          <li onClick={handleTogglePlay}>
            {isPlaying ? <FiPause /> : <FiPlay />}
          </li>
          <li onClick={handlePrevSlide}>
            <GrFormPrevious />
          </li>
          <li className='icon-btn' onClick={handleNextSlide}>
            <GrFormNext />
          </li>
        </ul>
        <div className='progress-elem'>
          <span className='progress-current-num'>
            <p>
              <b>{currentImage + 1}</b>
            </p>
          </span>
          <div className='progress'>
            <span className='progress-bar' ref={progressRef} />
          </div>
          <p className='progress-total-num'>{image.length}</p>
        </div>
      </div>
    </ControllWrap>
  )
}
