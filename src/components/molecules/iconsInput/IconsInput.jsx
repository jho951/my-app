import React, { useRef, useState } from 'react';
import { IconsInputWrap } from './IconsInput.styled';
import { CustomInput } from '../../atoms/input/Input';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { RiErrorWarningLine } from 'react-icons/ri';
import { CustomButton } from '../../atoms/button/Button';

const IconsInput = ({ className, icons, type, onChange, value, name, isValid }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordHide, setIsPasswordHide] = useState(false);
  const inputRef = useRef(null);

  const onClickPasswordBtn = () => {
    setIsPasswordHide((prev) => !prev);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSearchClear = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <IconsInputWrap onFocus={handleFocus} onBlur={handleBlur} isFocused={isFocused} className={className}>
      {type !== 'search' && (
        <CustomInput
          className={className}
          type={type === 'password' && isPasswordHide ? 'password' : 'text'}
          onChange={onChange}
          value={value}
          name={name}
          ref={inputRef}
          fullWidth
        />
      )}

      {type === 'search' && (
        <>
          <CustomInput className={className} type="search" onChange={onChange} value={value} name={name} ref={inputRef} fullWidth />
          <CustomButton design="icon" onClick={handleSearchClear}>
            X
          </CustomButton>
        </>
      )}

      <div className="side-icon-container">
        <p className="input-icons">{icons}</p>

        {!isValid && isValid !== undefined && <RiErrorWarningLine size="17" color="#ff1111" />}

        {type === 'password' && (
          <CustomButton design="icon" type="button" onClick={onClickPasswordBtn}>
            {isPasswordHide ? <AiOutlineEye size="21" color="#999" /> : <AiOutlineEyeInvisible size="21" color="#999" />}
          </CustomButton>
        )}
      </div>
    </IconsInputWrap>
  );
};

export default IconsInput;
