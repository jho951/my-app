import Head from "next/head"
import {IMG_PATH} from ".."

export const DefaultHead = () => (
  <Head>
    <meta charSet='UTF-8' />
    <link rel='icon' href={`${IMG_PATH}/favicon.ico`} />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <meta name='author' content='회사대표' />
    <meta property='og:type' content='website' />
    <meta name='twitter:card' content='summary' />
  </Head>
)
export const PageHead = ({title, description, keyword, data}) => (
  <Head>
    <title>{data?.category || title}</title>
    <meta name='description' content={description || ""} />
    <meta name='Keywords' content={keyword || ""} />

    <meta property='og:title' content={data?.category || title} />
    <meta property='og:description' content={description || ""} />
    <meta property='og:url' content='페이지 URL' />
    <meta property='og:image' content={data?.images[0] || "/favicon.ico"} />

    <meta name='twitter:title' content={data?.category || title} />
    <meta name='twitter:description' content='공유 설명' />
    <meta name='twitter:image' content={data?.images[0] || "/favicon.ico"} />
  </Head>
)

const HeadComponents = {
  DefaultHead,
  PageHead,
}

export default HeadComponents
