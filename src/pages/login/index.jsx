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
      <CustomButton type='default' size='medium'>
        텍스트 버튼
      </CustomButton>
    </div>
  )
}

export default Index
