import React, { useState } from 'react';
import * as S from './Select.styled';
import { CustomButton } from '../../atoms/button/Button';
import { CustomList } from '../../atoms/list/list';

const CustomSelect = ({ setBody, menus, fullWidth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setBody(option.label);
  };
  return (
    <S.SelectWrap>
      <CustomButton design="outline" fullWidth={fullWidth ?? undefined} onClick={handleToggle}>
        {selectedOption ? selectedOption.label : '선택'}
      </CustomButton>

      {isOpen && (
        <ul>
          <CustomList menus={menus} onClick={handleSelect} />
        </ul>
      )}
    </S.SelectWrap>
  );
};

export default CustomSelect;
