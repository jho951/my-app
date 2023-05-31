import {useState, useCallback} from "react"
import {CustomBtn} from "./Button.styled"
import {Spinner} from "../../../utils/Loading/Spinner/Spinner"

export const CustomButton = ({
  children,
  onClick,
  disable = false,
  loading = false,
  className,
  ...props
}) => {
  // JS 기능을 위한 State 입니다.
  const [isHovered, setIsHovered] = useState(false)

  // hover 시 JS로 제공할 기능을 넣을 함수입니다.
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
  }, [])
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
  }, [])

  // 웹 접근성 향상을 위한 Enter를 통해 click 이벤트 적용 함수입니다.
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
      role='button'
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
