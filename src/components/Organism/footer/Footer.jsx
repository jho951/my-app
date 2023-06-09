import React from "react"
import FNB from "../../molecules/fnb/FNB"
import {FooterWrap} from "./Footer.styled"
import {CustomImage} from "../../atoms/Image/Image"
import {IMG_PATH} from "../../../utils/constants/project"

const Footer = () => {
  return (
    <FooterWrap>
      <figure className='footer-wrap'>
        <div>
          <CustomImage image={`${IMG_PATH}/footerLogo.png`} alt='fnb-logo' />
          <h3>ⓒ2023 atozsoft. All rights reserved.</h3>
        </div>
        <FNB />
        <div className='footer-menu'>
          <p id='main'></p>
        </div>
      </figure>
    </FooterWrap>
  )
}

export default Footer
