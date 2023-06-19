import React from "react"
import Link from "next/link"
import {IconLinkContainer} from "./IconLink.styled"
import {CustomImage} from "../../atoms/image/Image"

const IconLink = ({label, href, src, size, bgColor, isBoxShadow}) => {
  return (
    <IconLinkContainer size={size} bgColor={bgColor} isBoxShadow={isBoxShadow}>
      <Link className='link-item' href={href}>
        <div className='icon-container'>
          <CustomImage image={src} alt='side-bar-icons' />
        </div>
        <p className='label-txt'>{label}</p>
      </Link>
    </IconLinkContainer>
  )
}

export default IconLink
