import {useRouter} from "next/router"
import {PROJECT_NAME} from "../../../utils/constants/project"
import {LinkText} from "../../atoms/link/text/LinkText"
import GNB from "../../molecules/gnb/GNB"
import {HeaderWrap} from "./Header.styled"

const AccountLink = [
  {id: "login", label: "로그인", href: "/login"},
  {id: "join", label: "회원가입", href: "/join"},
]

const Header = () => {
  const router = useRouter()
  return (
    <HeaderWrap>
      <h1 className='header-title' onClick={() => router.push("/")}>
        {PROJECT_NAME}
      </h1>
      <LinkText link={AccountLink} />
      <GNB />
    </HeaderWrap>
  )
}

export default Header
