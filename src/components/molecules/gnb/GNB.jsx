import {useState} from "react"
import {GNB_MENU} from "../../../utils/constants/project"
import {GnbWrap} from "./GNB.styled"
import {LnbWrap} from "../../atoms/lnb/LNB.styled"

import LNB from "../../atoms/lnb/LNB"

const GNB = () => {
  const [showLnb, setShowLnb] = useState(false)
  const [activeMenuId, setActiveMenuId] = useState(null)

  const handleMouseEnter = () => {
    setShowLnb(true)
  }

  const handleMouseLeave = () => {
    setShowLnb(false)
  }

  const handleMenuClick = (menuId) => {
    setActiveMenuId(menuId)
  }

  return (
    <GnbWrap onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <ul>
        {GNB_MENU?.map((menu) => (
          <li
            key={menu.id}
            className={menu.id === activeMenuId ? "active" : ""}
            onClick={() => handleMenuClick(menu.id)}
          >
            <a href={menu.href}>{menu.label}</a>
          </li>
        ))}
      </ul>
      <LnbWrap show={showLnb}>{showLnb && <LNB />}</LnbWrap>
    </GnbWrap>
  )
}

export default GNB
