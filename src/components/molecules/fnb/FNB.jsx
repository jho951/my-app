import React from "react"
import {FnbWrap} from "./FNB.styled"
import {FNB_MENU, IMG_PATH} from "../../../utils/constants/project"
import {LinkText} from "../link/LinkText"
import {CustomImage} from "../../atoms/Image/Image"

const FNB = () => {
  return (
    <FnbWrap>
      <div className='fnb-log-wrap'>
        <CustomImage
          image={`${IMG_PATH}/fnbLogo.png`}
          alt='fnb-logo'
          width={120}
          aspectRatio={"3:1"}
        />
      </div>
      <LinkText link={FNB_MENU} />
    </FnbWrap>
  )
}

export default FNB
