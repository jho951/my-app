import {useState} from "react"
import {useRouter} from "next/router"
import {GNB_MENU} from "../../../utils/constants/project"
import {GnbWrap} from "./GNB.styled"
import LNB from "../../atoms/lnb/LNB"
import Link from "next/link"

const GNB = () => {
  const router = useRouter()
  const [showLnb, setShowLnb] = useState(false)
  const handleMouseEnter = () => setShowLnb(true)
  const handleMouseLeave = () => setShowLnb(false)

  return (
    <GnbWrap>
      {GNB_MENU?.map((menu) => (
        <Link
          className='gnb-menu'
          role='tab'
          href={menu.href}
          key={menu.id}
          passHref
        >
          <li
            className={router.pathname === menu.href ? "active" : ""}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {menu.label}
          </li>
        </Link>
      ))}
      {showLnb && <LNB showLnb={showLnb} />}
    </GnbWrap>
  )
}

export default GNB
