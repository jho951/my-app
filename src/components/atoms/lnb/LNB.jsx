import {CustomList} from "../list/list"
import {LnbWrap} from "./LNB.styled"

const LNB = ({menus}) => {
  return (
    <LnbWrap>
      {/* {activeMenuItem && activeMenuItem.children && ( */}
      <CustomList menus={menus} />
    </LnbWrap>
  )
}
export default LNB
