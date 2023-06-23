import React from 'react';
import Link from 'next/link';
import { IconLinkContainer } from './IconLink.styled';
import { CustomImage } from '../../atoms/image/Image';

const IconLink = ({ label, href, src, size, bgColor, isBoxShadow, borderRadius }) => {
  return (
    <IconLinkContainer size={size} bgColor={bgColor} isBoxShadow={isBoxShadow} borderRadius={borderRadius}>
      <Link className="link-item" href={href}>
        <span className="icon-wrap">
          <CustomImage image={src} alt="side-bar-icons" />
        </span>
        <p className="label-txt">{label}</p>
      </Link>
    </IconLinkContainer>
  );
};

export default IconLink;
