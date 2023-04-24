import {useState, useRef} from "react"
import {CustomButton} from "./Button.styled"

const Button = ({children, ...props}) => {
  // const [isHovered, setIsHovered] = useState(false)
  // function handleMouseEnter() {
  //   setIsHovered(true)
  //   console.log(background)
  // }

  // function handleMouseLeave() {
  //   setIsHovered(false)
  // }
  const btnRef = useRef(null)
  return (
    <CustomButton
      {...props}
      ref={btnRef}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      {children}
    </CustomButton>
  )
}

export default Button
