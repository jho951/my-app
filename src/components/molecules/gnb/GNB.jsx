import {useState} from "react"
import LNB from "../../atoms/lnb/LNB"
import {GNB_MENU} from "../../../utils/constants/project"
import {GnbWrap} from "./GNB.styled"
import {CustomList} from "../../atoms/list/list"

const GNB = () => {
  //LNB 드롭다운//
  const [isHovered, setIsHovered] = useState(false)
  const handleMouseToggle = (isHovering) => setIsHovered(isHovering)

  const lnbMatchHandler = (e) => {
    console.log(e)
  }
  return (
    <GnbWrap
      onMouseEnter={() => handleMouseToggle(true)}
      onMouseLeave={() => handleMouseToggle(false)}
    >
      <CustomList menus={GNB_MENU} onMouseEnter={lnbMatchHandler} />
      {isHovered && <LNB menus={GNB_MENU} />}
    </GnbWrap>
  )
}

export default GNB
