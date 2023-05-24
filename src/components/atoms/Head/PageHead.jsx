import Head from "next/head"

export default function PageHead({title, description, keyword, data}) {
  return (
    <Head>
      <title>{data?.category || title}</title>
      <meta name='description' content={description || ""} />
      <meta name='Keywords' content={keyword || ""} />

      {/* <--Naver, 카카오톡 미리보기-->  */}

      <meta property='og:title' content={data?.category || title} />
      <meta property='og:description' content={description || ""} />
      <meta property='og:url' content='페이지 URL' />
      <meta property='og:image' content={data?.images[0] || "/favicon.ico"} />

      {/* <--twitter 공유-->  */}

      <meta name='twitter:title' content={data?.category || title} />
      <meta name='twitter:description' content='공유 설명' />
      <meta name='twitter:image' content={data?.images[0] || "/favicon.ico"} />
    </Head>
  )
}
