import React, {useState} from "react"
import {IconsInputWrap} from "./IconsInput.styled"
import {CustomInput} from "../../atoms/input/Input"

const IconsInput = ({className, icons, type}) => {
  const [isFocused, setIsFocused] = useState(false)
  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }
  return (
    <IconsInputWrap
      tabIndex={0}
      onFocus={handleFocus}
      onBlur={handleBlur}
      isFocused={isFocused}
      className={className}
    >
      <CustomInput className={className} type={type} fullWidth />
      <p className='input-icons'>{icons}</p>
    </IconsInputWrap>
  )
}

export default IconsInput
