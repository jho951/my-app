import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { CustomInputWrap } from './Input.styled';

export const CustomInput = forwardRef(({ value, onChange, placeholder, className, type, fullWidth }, ref) => {
  const handleChange = (event) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <CustomInputWrap
      type={type}
      value={value}
      onChange={handleChange}
      className={className}
      placeholder={placeholder}
      fullWidth={fullWidth}
      ref={ref}
    />
  );
});

// props 자료 타입입니다.

CustomInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  fullWidth: PropTypes.bool,
};
CustomInput.defaultProps = {
  value: '',
  onChange: undefined,
  placeholder: '',
  className: '',
  type: 'text',
  fullWidth: false,
};
