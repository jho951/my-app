import { IMG_PATH } from '../../../utils/constants/project';
import GNB from '../../molecules/gnb/GNB';
import { HeaderContainer } from './Header.styled';
import { CustomList } from '../../atoms/list/list';
import IconLink from '../../molecules/iconLink/IconLink';

const Header = ({ accountLink }) => {
  return (
    <HeaderContainer>
      <nav className="heder-wrap">
        <IconLink href="/" src={`${IMG_PATH}/headerLogo.png`} alt="project-logo" borderRadius="0" />

        <GNB />
        <ul className="header-account">
          <CustomList menus={accountLink} />
          <li>영역</li>
          {/* <I18Btn /> */}
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
