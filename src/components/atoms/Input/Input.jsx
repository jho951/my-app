import {InputElement} from "./Input.styled"

export const CustomInput = ({
  value,
  onChange,
  placeholder,
  className,
  type,
  role,
}) => {
  return (
    <InputElement
      role={role}
      type={type}
      value={value}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
    />
  )
}
