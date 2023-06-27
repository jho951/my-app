import React, { useRef, useState } from 'react';
import { IconsInputWrap } from './IconsInput.styled';
import { CustomInput } from '../../atoms/input/Input';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { RiErrorWarningLine } from 'react-icons/ri';
import { CustomButton } from '../../atoms/button/Button';

const IconsInput = ({ className, icons, type, onChange, value, name, isValid, fullWidth }) => {
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

  const renderInput = () => {
    switch (type) {
      case 'password':
        return (
          <>
            <CustomInput
              className={className}
              type={isPasswordHide ? 'password' : 'text'}
              onChange={onChange}
              value={value}
              name={name}
              ref={inputRef}
              fullWidth={fullWidth}
            />
            <CustomButton design="icon" type="button" onClick={onClickPasswordBtn}>
              {isPasswordHide ? <AiOutlineEye size="20" color="#999" /> : <AiOutlineEyeInvisible size="20" color="#999" />}
            </CustomButton>
          </>
        );
      default:
        return (
          <CustomInput
            className={className}
            type={type}
            onChange={onChange}
            value={value}
            name={name}
            ref={inputRef}
            fullWidth={fullWidth}
          />
        );
    }
  };

  return (
    <IconsInputWrap onFocus={handleFocus} onBlur={handleBlur} isFocused={isFocused} className={className}>
      {renderInput()}

      <div className="side-icon-container">
        {!isValid && isValid !== undefined && <RiErrorWarningLine size="17" color="#ff1111" />}
        <p className="input-icons">{icons}</p>
      </div>
    </IconsInputWrap>
  );
};

export default IconsInput;
