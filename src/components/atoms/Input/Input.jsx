import {CustomInputWrap} from "./Input.styled"

export const CustomInput = ({
  value,
  onChange,
  placeholder,
  className,
  type,
  fullWidth,
  name,
  inpRef,
}) => {
  return (
    <CustomInputWrap
      type={type}
      value={value}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
      fullWidth={fullWidth}
      name={name}
      ref={inpRef}
    />
  )
}
