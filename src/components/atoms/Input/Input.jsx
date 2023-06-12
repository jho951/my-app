import {CustomInputWrap} from "./Input.styled"

export const CustomInput = ({
  value,
  onChange,
  placeholder,
  className,
  type,
  fullWidth,
}) => {
  return (
    <CustomInputWrap
      type={type}
      value={value}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
      fullWidth={fullWidth}
    />
  )
}
