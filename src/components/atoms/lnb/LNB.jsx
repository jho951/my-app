import { CustomList } from '../list/list';
import { LnbWrap } from './LNB.styled';

const LNB = ({ menus }) => {
  return (
    <LnbWrap>
      <CustomList menus={menus} />
    </LnbWrap>
  );
};
export default LNB;
