import {useState} from "react"
import LNB from "../../atoms/lnb/LNB"
import {GNB_MENU} from "../../../utils/constants/project"
import {GnbWrap} from "./GNB.styled"
import {CustomList} from "../../atoms/list/list"

const GNB = () => {
  //LNB 드롭다운//
  const [isHovered, setIsHovered] = useState(true)
  const openLnbToggle = (e) => {
    setIsHovered(true)
  }
  const closeLnbToggle = () => {
    setIsHovered(true)
  }

  return (
    <GnbWrap
      onMouseEnter={(e) => openLnbToggle(e)}
      onMouseLeave={closeLnbToggle}
    >
      <CustomList menus={GNB_MENU} />
      {isHovered && <LNB menus={GNB_MENU} />}
    </GnbWrap>
  )
}

export default GNB
