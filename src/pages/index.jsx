"useclient"
import Head from "next/head"
import React from "react"
import DefaultHead from "../utils/defaultHead"

export default function Index() {
  return (
    <React.Fragment>
      <DefaultHead
        title='헤더 테스트 중'
        description='테스트'
        seo='테스트'
        keyword='테스트, next.js'
      />
      <div role='button'>sad</div>
    </React.Fragment>
  )
}
