import {useCallback, useEffect, useState} from "react"
import Portal from "../../../utils/Portal/Portal"
import {
  TooltipArrow,
  TooltipBox,
  TooltipContainer,
  TooltipText,
} from "./ToolTip.styled"
import Link from "next/link"

const ToolTip = ({children, content, position, link}) => {
  const [show, setShow] = useState(false)
  const [tooltipWidth, setTooltipWidth] = useState(null)

  const handleRef = useCallback((node) => {
    if (node !== null) {
      const width = node.getBoundingClientRect().width
      setTooltipWidth(width)
    }
  }, [])
  useEffect(() => {
    const tooltipRoot = document.createElement("div")
    tooltipRoot.id = "tooltip-root"
    document.body.appendChild(tooltipRoot)
    return () => document.body.removeChild(tooltipRoot)
  }, [])

  useEffect(() => {
    if (tooltipWidth) {
      const box = document?.querySelector("#tooltip-box")
      box?.style?.setProperty("--tooltip-width", `${tooltipWidth}px`)
    }
  }, [tooltipWidth])

  const handleMouseEnter = () => {
    setShow(true)
  }

  const handleMouseLeave = () => {
    setShow(false)
  }

  useEffect(() => {
    document
      ?.getElementById("tooltip-root")
      ?.appendChild(document.createElement("div"))
  }, [])

  return (
    <Portal selector='#tooltip-root'>
      <TooltipContainer
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
        {show && (
          <TooltipBox position={position}>
            <TooltipText ref={handleRef}>{content}</TooltipText>
            <Link href={link} target='/blank' rel='noopener noreferrer'>
              <small>더 알아보기</small>
            </Link>
            <TooltipArrow position={position} />
          </TooltipBox>
        )}
      </TooltipContainer>
    </Portal>
  )
}

export default ToolTip
