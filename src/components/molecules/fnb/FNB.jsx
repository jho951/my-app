import React from "react"
import {FnbWrap} from "./FNB.styled"
import {FNB_MENU} from "../../../utils/constants/project"
import {LinkText} from "../../atoms/link/text/LinkText"

const FNB = () => {
  return (
    <FnbWrap>
      <LinkText link={FNB_MENU} />
    </FnbWrap>
  )
}

export default FNB
