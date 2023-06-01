import {InputElement} from "./Input.styled"

export const CustomInput = ({
  value,
  onChange,
  placeholder,
  className,
  type,
}) => {
  return (
    <InputElement
      role='input'
      type={type}
      value={value}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
    />
  )
}
