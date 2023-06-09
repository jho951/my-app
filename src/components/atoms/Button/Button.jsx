import {useState, useCallback} from "react"
import {CustomBtn} from "./Button.styled"
import {Spinner} from "../../../styles/GlobalStyled"

export const CustomButton = ({
  children,
  onClick,
  disable,
  loading,
  className,
  role,
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
      if (!disable && !loading && event.key === "Enter") {
        event.preventDefault()
        event.stopPropagation()
        onClick()
      }
    },
    [disable, loading, onClick]
  )
  return (
    <CustomBtn
      role={role}
      className={className}
      {...props}
      loading={loading}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      isHovered={isHovered}
      onClick={!disable ? onClick : undefined}
      disabled={disable || loading}
      aria-label={disable || loading ? "Button disabled" : "Button"}
      aria-disabled={disable || loading ? true : undefined}
    >
      {loading && <Spinner aria-hidden='true' />}
      {!loading && children}
    </CustomBtn>
  )
}
