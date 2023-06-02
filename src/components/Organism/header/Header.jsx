import Link from "next/link"
import {IMG_PATH} from "../../../utils/constants/project"
import GNB from "../../molecules/gnb/GNB"
import {HeaderContainer} from "./Header.styled"
import {CustomImage} from "../../atoms/Image/Image"
import {LinkText} from "../../molecules/link/LinkText"

const Header = ({accountLink}) => {
  return (
    <HeaderContainer>
      <figure className='heder-wrap'>
        <Link href={"/"} className='header-image'>
          <CustomImage
            image={`${IMG_PATH}/headerLogo.png`}
            alt={"project-logo"}
            width={200}
            aspectRatio={"5:1"}
          />
        </Link>
        <GNB />
        <LinkText className='text-btn header-account' link={accountLink} />
      </figure>
    </HeaderContainer>
  )
}

export default Header
