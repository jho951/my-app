import {CustomInput} from "../../components/atoms/input/Input"
import IconsInput from "../../components/molecules/iconsInput/IconsInput"
import {AiOutlineSearch} from "react-icons/ai"

const Index = () => {
  return (
    <>
      <IconsInput
        className={"search"}
        icons={<AiOutlineSearch />}
        type={"password"}
      />
      <CustomInput type={"text"} />
    </>
  )
}

export default Index
