import Link from "next/link"
import {IMG_PATH} from "../../../utils/constants/project"
import GNB from "../../molecules/gnb/GNB"
import {HeaderContainer} from "./Header.styled"
import {CustomImage} from "../../atoms/Image/Image"
import {LinkText} from "../../molecules/link/LinkText"

import I18Btn from "../../molecules/i18Btn/I18Btn"

const Header = ({accountLink}) => {
  return (
    <HeaderContainer>
      <figure className='heder-wrap'>
        <Link href={"/"} role='logo'>
          <CustomImage
            image={`${IMG_PATH}/headerLogo.png`}
            alt={"project-logo"}
            width={200}
            aspectRatio={"5:1"}
          />
        </Link>
        <GNB />
        <div className='header-account'>
          <LinkText className='text-btn' link={accountLink} />
          <I18Btn />
        </div>
      </figure>
    </HeaderContainer>
  )
}

export default Header
