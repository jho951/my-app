import {useEffect, useRef} from "react"
import {atom, useAtom} from "jotai"
import {BannerItemsWrap, ProgressBarFill} from "./BannerItems.styled"
import {BannerImage} from "../../atoms/bannerImage/BannerImage"
import {IMG_PATH} from "../../../utils/constants/project"

const imageAtom = atom(0)

export const BannerItems = () => {
  const [currentImage, setCurrentImage] = useAtom(imageAtom)
  const image = [
    {src: `${IMG_PATH}/test.png`, id: 1},
    {src: `${IMG_PATH}/test.png`, id: 2},
    {src: `${IMG_PATH}/test.png`, id: 3},
  ]
  const progressRef = useRef(null)
  const intervalRef = useRef(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % image.length)
      if (progressRef.current) {
        progressRef.current.style.animation = ""
        void progressRef.current.offsetWidth
        progressRef.current.style.animation = "none"
        void progressRef.current.offsetWidth
        progressRef.current.style.animation = `${fillAnimation} 5s linear forwards`
      }
    }, 5000)

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [currentImage, image.length, setCurrentImage])

  const handlePlay = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % image.length)
    if (progressRef.current) {
      progressRef.current.style.animation = ""
      void progressRef.current.offsetWidth
      progressRef.current.style.animation = "none"
      void progressRef.current.offsetWidth
      progressRef.current.style.animation = `${fillAnimation} 5s linear forwards`
    }
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % image.length)
      if (progressRef.current) {
        progressRef.current.style.animation = ""
        void progressRef.current.offsetWidth
        progressRef.current.style.animation = "none"
        void progressRef.current.offsetWidth
        progressRef.current.style.animation = `${fillAnimation} 5s linear forwards`
      }
    }, 5000)
  }

  return (
    <BannerItemsWrap>
      <BannerImage image={image} currentImage={currentImage} />
      <div className='progress-bar'>
        <ProgressBarFill ref={progressRef} />
      </div>
      <button onClick={handlePlay}>재생</button>
    </BannerItemsWrap>
  )
}
