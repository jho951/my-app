import Link from "next/link"
import {IMG_PATH} from "../../../utils/constants/project"
import GNB from "../../molecules/gnb/GNB"
import {CustomImage} from "../../atoms/image/Image"
import I18Btn from "../../molecules/i18Btn/I18Btn"
import {HeaderContainer} from "./Header.styled"
import {CustomList} from "../../atoms/list/list"

const Header = ({accountLink}) => {
  return (
    <HeaderContainer>
      <nav className='heder-wrap'>
        <Link href='/'>
          <CustomImage
            image={`${IMG_PATH}/headerLogo.png`}
            alt='project-logo'
          />
        </Link>
        <GNB />
        <ul className='header-account'>
          <CustomList menus={accountLink} />
          <li>영역</li>
          {/* <I18Btn /> */}
        </ul>
      </nav>
    </HeaderContainer>
  )
}

export default Header
