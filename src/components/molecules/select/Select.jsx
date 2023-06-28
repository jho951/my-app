import React, { useState } from 'react';
import * as S from './Select.styled';
import { CustomButton } from '../../atoms/button/Button';
import { CustomList } from '../../atoms/list/list';

const CustomSelect = ({ setBody, menus }) => {
  // select option 여닫음 관리 state
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
    <>
      <S.SelectWrap>
        <CustomButton design="text" fullWidth onClick={handleToggle}>
          <span> {selectedOption ? selectedOption.label : '선택'}</span>
          <span>n</span>
        </CustomButton>
      </S.SelectWrap>

      {isOpen && (
        <S.SelectOption>
          <CustomList menus={menus} onClick={handleSelect} />
        </S.SelectOption>
      )}
    </>
  );
};

export default CustomSelect;
