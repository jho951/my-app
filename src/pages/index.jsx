import Banner from "../components/Organism/banner/Banner"
import {CustomButton} from "../components/atoms/button/Button"
import {PageHead} from "../components/atoms/htmlHead/HtmlHead"
import {skipNavigation} from "../utils/utils"

export default function MyComponent() {
  return (
    <>
      <CustomButton
        className={"skipLink"}
        tabIndex={1}
        onClick={() => skipNavigation("main")}
      >
        <p>병원</p>
      </CustomButton>
      <PageHead
        title='헤더 테스트 중'
        description='테스트'
        keyword='테스트, next.js'
      />
      <Banner />
    </>
  )
}
