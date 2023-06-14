import {useEffect} from "react"
import Banner from "../components/Organism/banner/Banner"

import {PageHead} from "../components/atoms/htmlHead/HtmlHead"
import SideBar from "../components/organism/sideBar/SideBar"
import {sendWeChatAPIRequest} from "../components/atoms/a/a"

export default function MyComponent() {
  useEffect(() => {
    // 예시 사용법
    sendWeChatAPIRequest("user/profile", {access_token: "Y"})
  }, [])
  console.log(sendWeChatAPIRequest)
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
