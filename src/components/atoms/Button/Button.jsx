import {CustomButton} from "./Button.styled"

export const Button = ({children, onClick}) => {
  return <CustomButton onClick={onClick}>{children}</CustomButton>
}
