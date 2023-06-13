import {useState} from "react"
import LNB from "../../atoms/lnb/LNB"
import {GNB_MENU} from "../../../utils/constants/project"
import {GnbWrap} from "./GNB.styled"
import {CustomList} from "../../atoms/list/list"

const GNB = () => {
  const [isHovered, setIsHovered] = useState([])

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <GnbWrap>
      <CustomList
        menus={GNB_MENU}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {isHovered && <LNB />}
    </GnbWrap>
  )
}

export default GNB
