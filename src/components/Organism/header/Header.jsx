import Link from "next/link"
import {IMG_PATH} from "../../../utils/constants/project"
import GNB from "../../molecules/gnb/GNB"
import {CustomImage} from "../../atoms/Image/Image"
import {LinkText} from "../../molecules/link/LinkText"
import I18Btn from "../../molecules/i18Btn/I18Btn"
import {HeaderContainer} from "./Header.styled"

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
        <span className='header-account'>
          <LinkText link={accountLink} type='text' />
          {/* <I18Btn /> */}
        </span>
      </nav>
    </HeaderContainer>
  )
}

export default Header
