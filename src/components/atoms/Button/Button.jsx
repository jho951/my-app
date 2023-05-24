import {useState, useCallback} from "react"
import {CustomBtn} from "./Button.styled"
import {Spinner} from "../../../utils/Spinner/Spinner"

export const CustomButton = ({
  children = "Button",
  onClick = () => {
    console.warn("onClick event not provided.")
  },
  disable = false,
  loading = false,
  className,
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
      if (!disable && event.key === "Enter") {
        onClick()
      }
    },
    [disable, onClick]
  )

  return (
    <CustomBtn
      className={className}
      {...props}
      loading={loading}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      isHovered={isHovered}
      onClick={!disable ? onClick : undefined}
      disabled={disable || loading}
    >
      {loading && <Spinner />}
      {!loading && children}
    </CustomBtn>
  )
}
