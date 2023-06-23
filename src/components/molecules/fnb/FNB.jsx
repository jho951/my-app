import React from 'react';
import { FnbWrap } from './FNB.styled';
import { FNB_MENU } from '../../../utils/constants/project';
import { CustomList } from '../../atoms/list/list';

const FNB = () => {
  return (
    <FnbWrap>
      <CustomList menus={FNB_MENU} />
    </FnbWrap>
  );
};

export default FNB;
