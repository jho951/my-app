import {useState, useCallback} from "react"
import {CustomBtn} from "./Button.styled"
import {Spinner} from "../../../utils/Spinner/Spinner"

export const CustomButton = ({
  children = "Button",
  onClick = () => {
    console.warn("onClick event not provided.")
  },
  disabled = false,
  loading = false,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
  }, [])

  const handleKeyDown = useCallback(
    (event) => {
      if (!disabled && event.key === "Enter") {
        onClick()
      }
    },
    [disabled, onClick]
  )

  return (
    <CustomBtn
      {...props}
      loading={loading}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      isHovered={isHovered}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled || loading}
    >
      {loading ? <Spinner /> : children}
    </CustomBtn>
  )
}
