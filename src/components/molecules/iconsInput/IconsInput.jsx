import React, {useState} from "react"
import {IconsInputWrap} from "./IconsInput.styled"
import {CustomInput} from "../../atoms/input/Input"
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import {RiErrorWarningLine} from "react-icons/ri"
import {CustomButton} from "../../atoms/button/Button"

const IconsInput = ({
  className,
  icons,
  type,
  onChange,
  value,
  name,
  isValid,
  inpRef,
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isPasswordHide, setIsPasswordHide] = useState(false)

  const onClickPasswordBtn = () => {
    setIsPasswordHide((prev) => !prev)
  }

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }
  return (
    <IconsInputWrap
      onFocus={handleFocus}
      onBlur={handleBlur}
      isFocused={isFocused}
      className={className}
    >
      <CustomInput
        className={className}
        type={"password" && isPasswordHide ? "password" : "text"}
        onChange={onChange}
        value={value}
        name={name}
        inpRef={inpRef}
        fullWidth
      />
      <div className='side-icon-container'>
        <p className='input-icons'>{icons}</p>

        {!isValid && isValid !== undefined && (
          <RiErrorWarningLine size='17' color='#ff1111' />
        )}

        {type === "password" && (
          <CustomButton
            design='icon'
            type='button'
            onClick={onClickPasswordBtn}
          >
            {isPasswordHide ? (
              <AiOutlineEye size='21' color='#999' />
            ) : (
              <AiOutlineEyeInvisible size='21' color='#999' />
            )}
          </CustomButton>
        )}
      </div>
    </IconsInputWrap>
  )
}

export default IconsInput
