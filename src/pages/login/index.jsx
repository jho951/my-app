import {CustomButton} from "../../components/atoms/button/Button"
import {CustomInput} from "../../components/atoms/input/Input"
import IconsInput from "../../components/molecules/iconsInput/IconsInput"
import {AiOutlineSearch} from "react-icons/ai"
import {Container} from "../../styles/page/Layout/Container.styled"

const Index = () => {
  return (
    <Container maxWidth='688px'>
      <IconsInput
        className='search'
        icons={
          <CustomButton design='icon' onClick={() => alert("rrr")}>
            <AiOutlineSearch />
          </CustomButton>
        }
        type='text'
      />
      <div style={{display: "flex"}}>
        <CustomInput type='text' />
        <CustomButton size='medium' onClick={() => alert("테스트")}>
          <AiOutlineSearch />
        </CustomButton>
      </div>
    </Container>
  )
}

export default Index
