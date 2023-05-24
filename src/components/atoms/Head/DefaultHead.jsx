import Head from "next/head"

export default function DefaultHead() {
  return (
    <Head>
      {/* //파비콘 설정 필요 */}
      <link rel='icon' href='/favicon.ico' />
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      {/* 회사 대표 설정 필요 */}
      <meta name='author' content='회사대표' />
      {/* <--Naver, 카카오톡 미리보기-->  */}
      <meta property='og:type' content='website' />
      {/* <--twitter 공유-->  */}
      <meta name='twitter:card' content='summary' />
    </Head>
  )
}
