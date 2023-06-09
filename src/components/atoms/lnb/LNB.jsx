import {LnbWrap} from "./LNB.styled"

const LNB = ({showLnb}) => {
  return (
    <LnbWrap showLnb={showLnb}>
      <ul>
        <li className='lnb-item'>
          <a href='/sub1'>서브메뉴1</a>
        </li>
        <li className='lnb-item'>
          <a href='/sub2'>서브메뉴2</a>
        </li>
        <li className='lnb-item'>
          <a href='/sub3'>서브메뉴3</a>
        </li>
      </ul>
    </LnbWrap>
  )
}
export default LNB
