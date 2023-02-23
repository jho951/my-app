import React from "react"
import Head from "next/head"

export default function PageHead({props}) {
  console.log(props)
  return (
    <React.Fragment>
      <Head>
        <title>{props?.data?.category || props?.title}</title>
        <meta name='description' content={props?.description || ""} />
        <meta name='Keywords' content={props?.keyword || ""} />

        {/* <--Naver, 카카오톡 미리보기-->  */}

        <meta
          property='og:title'
          content={props?.data?.category || props?.title}
        />
        <meta property='og:description' content={props?.description || ""} />
        <meta property='og:url' content='페이지 URL' />
        <meta
          property='og:image'
          content={props?.data?.images[0] || "/favicon.ico"}
        />

        {/* <--twitter 공유-->  */}

        <meta
          name='twitter:title'
          content={props?.data?.category || props?.title}
        />
        <meta name='twitter:description' content='공유 설명' />
        <meta
          name='twitter:image'
          content={props?.data?.images[0] || "/favicon.ico"}
        />
      </Head>
      <h1 id='seo'>{props?.seo || props?.title}</h1>
    </React.Fragment>
  )
}
