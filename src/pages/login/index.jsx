import {CustomButton} from "../../components/atoms/button/Button"
import {CustomInput} from "../../components/atoms/input/Input"
import IconsInput from "../../components/molecules/iconsInput/IconsInput"
import {AiOutlineSearch} from "react-icons/ai"

const Index = () => {
  return (
    <div style={{position: "absolute", top: "50%"}}>
      <IconsInput
        className='search'
        icons={<AiOutlineSearch />}
        type='password'
      />
      <CustomInput type='text' />
      <CustomButton type='icon' size='medium' onClick={() => alert("테스트")}>
        <AiOutlineSearch />
      </CustomButton>
    </div>
  )
}

export default Index
