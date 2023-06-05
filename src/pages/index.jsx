import Banner from "../components/Organism/banner/Banner"
import {CustomButton} from "../components/atoms/button/Button"
import {PageHead} from "../components/atoms/htmlHead/HtmlHead"
import SideBar from "../components/organism/sideBar/SideBar"
import {skipNavigation} from "../utils/utils"

export default function MyComponent() {
  return (
    <>
      <h1 className='visuallyhidden' role='title'>
        happy-medion
      </h1>
      <PageHead
        title='해피매디온'
        desrciption='메인페이지'
        keyword='homepage'
      />
      <CustomButton
        className={"skipLink"}
        tabIndex={1}
        onClick={() => skipNavigation("main")}
      >
        <p>병원</p>
      </CustomButton>
      <Banner />
      <SideBar />
    </>
  )
}
