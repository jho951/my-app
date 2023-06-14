import {CustomList} from "../list/list"
import {LnbWrap} from "./LNB.styled"

const LNB = ({menus}) => {
  const activeMenuId = "info"
  const activeMenuItem = menus.find((item) => item.id === activeMenuId)
  return (
    <LnbWrap>
      {activeMenuItem && activeMenuItem.children && (
        <CustomList menus={activeMenuItem.children} />
      )}
    </LnbWrap>
  )
}
export default LNB
