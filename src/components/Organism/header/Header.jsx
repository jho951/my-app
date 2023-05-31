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
          image={`${IMG_PATH}/happyMedion.png`}
          alt={"project-logo"}
        />
      </Link>
      <GNB />

      <LinkText
        link={AccountLink}
        className={"text-btn"}
        fontSize={`${(props) => props.theme.fontSize.gnb}`}
      />
    </HeaderWrap>
  )
}

export default Header
