import ReactDOM from "react-dom"
import {useEffect, useRef} from "react"

const Portal = ({children, selector}) => {
  const elRef = useRef(null)

  useEffect(() => {
    const existingElement = document?.querySelector(selector)
    const portalElement = document?.createElement("div")
    portalElement?.setAttribute("id", selector.slice(1)) // slice()로 "#" 문자 제거
    existingElement?.appendChild(portalElement)
    elRef.current = portalElement

    return () => {
      existingElement?.removeChild(portalElement)
    }
  }, [selector])

  return elRef.current ? ReactDOM.createPortal(children, elRef.current) : null
}

export default Portal
