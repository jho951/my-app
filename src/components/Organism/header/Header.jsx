import Link from "next/link"
import {IMG_PATH} from "../../../utils/constants/project"
import GNB from "../../molecules/gnb/GNB"
import {HeaderWrap} from "./Header.styled"
import {CustomImage} from "../../atoms/Image/Image"
import {LinkText} from "../../molecules/link/LinkText"

const AccountLink = [
  {id: "login", label: "로그인", href: "/login"},
  {id: "join", label: "회원가입", href: "/join"},
]

const Header = () => {
  return (
    <HeaderWrap>
      <Link className='header-image' href={"/"}>
        <CustomImage
          image={`${IMG_PATH}/headerLogo.png`}
          alt={"project-logo"}
          width={200}
          aspectRatio={"5:1"}
        />
      </Link>
      <GNB />
      <LinkText link={AccountLink} className={"text-btn header-account"} />
    </HeaderWrap>
  )
}

export default Header
