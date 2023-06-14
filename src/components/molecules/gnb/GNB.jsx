import {useState} from "react"
import LNB from "../../atoms/lnb/LNB"
import {GNB_MENU} from "../../../utils/constants/project"
import {GnbWrap} from "./GNB.styled"
import {CustomList} from "../../atoms/list/list"

const GNB = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [activeChildren, setActiveChildren] = useState([])

  const openLnbToggle = (menuId) => {
    const selectedMenu = GNB_MENU.find((menu) => menu.id === menuId)
    setActiveChildren(selectedMenu?.children || [])
    setIsHovered(true)
  }
  const closeLnbToggle = () => {
    setIsHovered(false)
  }

  return (
    <GnbWrap onMouseEnter={openLnbToggle} onMouseLeave={closeLnbToggle}>
      <CustomList menus={GNB_MENU} onMouseEnter={openLnbToggle} />
      {isHovered && <LNB menus={activeChildren} />}
    </GnbWrap>
  )
}

export default GNB
