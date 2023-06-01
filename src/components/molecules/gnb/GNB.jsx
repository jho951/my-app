import {useState} from "react"
import {GNB_MENU} from "../../../utils/constants/project"
import {GnbWrap} from "./GNB.styled"
import {LnbWrap} from "../../atoms/lnb/LNB.styled"
import LNB from "../../atoms/lnb/LNB"
import Link from "next/link"
import {useRouter} from "next/router"

const GNB = () => {
  const router = useRouter()
  const [showLnb, setShowLnb] = useState(false)

  const handleMouseEnter = () => setShowLnb(true)
  const handleMouseLeave = () => setShowLnb(false)

  return (
    <GnbWrap>
      <div className='gnb-element'>
        {GNB_MENU?.map((menu) => (
          <Link href={menu.href} key={menu.id} passHref>
            <p
              className={router.pathname === menu.href ? "active" : ""}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {menu.label}
            </p>
          </Link>
        ))}
      </div>
      <LnbWrap showLnb={showLnb}>{showLnb && <LNB />}</LnbWrap>
    </GnbWrap>
  )
}

export default GNB
