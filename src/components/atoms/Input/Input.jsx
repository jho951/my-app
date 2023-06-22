import { forwardRef } from 'react';
import { CustomInputWrap } from './Input.styled';

export const CustomInput = forwardRef(({ value, onChange, placeholder, className, type, fullWidth, name }, ref) => {
  return (
    <CustomInputWrap
      type={type}
      value={value}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
      fullWidth={fullWidth}
      name={name}
      ref={ref}
    />
  );
});
