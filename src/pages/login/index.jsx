import { CustomButton } from '../../components/atoms/button/Button';
import IconsInput from '../../components/molecules/iconsInput/IconsInput';
import { AiOutlineSearch } from 'react-icons/ai';
import { Container } from '../../styles/page/Layout/Container.styled';

const Index = () => {
  return (
    <Container maxWidth="688px">
      <IconsInput type="password" />
      <div style={{ display: 'flex' }}>
        <IconsInput type="search" />
        <CustomButton size="medium" onClick={() => alert('테스트')}>
          <AiOutlineSearch />
        </CustomButton>
      </div>
    </Container>
  );
};

export default Index;
