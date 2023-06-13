import React, {useState} from "react"
import {CustomBtn} from "./Button.styled"
import {Spinner} from "../../../styles/GlobalStyled"

export const CustomButton = ({
  children,
  onClick,
  disable,
  loading,
  placeholder,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }
  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleKeyDown = (event) => {
    if (!disable && !loading && event.key === "Enter") {
      onClick()
    }
  }

  return (
    <CustomBtn
      {...props}
      loading={loading}
      placeholder={placeholder}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      isHovered={isHovered}
      onClick={!disable ? onClick : undefined}
      disabled={disable || loading}
      aria-label={disable || loading ? "Button disabled" : "Button"}
      aria-disabled={disable || loading ? true : false}
    >
      {loading && <Spinner aria-hidden='true' />}
      {!loading && children}
    </CustomBtn>
  )
}
