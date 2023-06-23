import React from 'react';
import { SideBarContainer } from './SideBar.styled';
import { SIDEBAR } from '../../../utils/constants/project';
import IconLink from '../../molecules/iconLink/IconLink';

const SideBar = () => {
  return (
    <SideBarContainer>
      {SIDEBAR.map((menu) => (
        <IconLink key={menu.id} label={menu.label} href={menu.href} src={menu.src} size="md" bgColor="#fdfdfd" isBoxShadow />
      ))}
    </SideBarContainer>
  );
};

export default SideBar;
