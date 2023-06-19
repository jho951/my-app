import React from "react"
import FNB from "../../molecules/fnb/FNB"
import {FooterWrap} from "./Footer.styled"
import {CustomImage} from "../../atoms/image/Image"
import {IMG_PATH} from "../../../utils/constants/project"

const Footer = () => {
  return (
    <FooterWrap>
      <nav className='footer-wrap'>
        <figure>
          <CustomImage image={`${IMG_PATH}/footerLogo.png`} alt='fnb-logo' />
          <h3>ⓒ2023 atozsoft. All rights reserved.</h3>
        </figure>
        <FNB />
        <div className='footer-menu'>
          <p id='main'></p>
        </div>
      </nav>
    </FooterWrap>
  )
}

export default Footer
