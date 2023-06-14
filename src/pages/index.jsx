import Banner from "../components/Organism/banner/Banner"

import {PageHead} from "../components/atoms/htmlHead/HtmlHead"
import SideBar from "../components/organism/sideBar/SideBar"

export default function MyComponent() {
  return (
    <>
      <PageHead
        title='해피매디온'
        desrciption='메인페이지'
        keyword='homepage'
      />
      <Banner />
      <SideBar />
    </>
  )
}
