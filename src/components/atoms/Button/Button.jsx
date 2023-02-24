import {useState} from "react"
import {CustomButton} from "./Button.styled"

const Button = ({children, onClick, className, background}) => {
  const [isHovered, setIsHovered] = useState(false)
  function handleMouseEnter() {
    setIsHovered(true)
    console.log(background)
  }

  function handleMouseLeave() {
    setIsHovered(false)
  }

  return (
    <CustomButton
      className={className}
      onClick={onClick}
      background={background}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      {children}
    </CustomButton>
  )
}

export default Button
