import Head from 'next/head';
import { IMG_PATH } from '../../../utils/constants/project';

export const DefaultHead = () => (
  <Head>
    <meta charSet="UTF-8" />
    <link rel="icon" href={`${IMG_PATH}/country/southKorea.png`} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="회사대표" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
  </Head>
);
export const PageHead = ({ headInfo, data }) => (
  <Head>
    <title>{data?.category || headInfo?.title}</title>
    <meta name="description" content={headInfo?.description || ''} />
    <meta name="Keywords" content={headInfo?.keyword || ''} />

    <meta property="og:title" content={data?.category || headInfo?.title} />
    <meta property="og:description" content={headInfo?.description || ''} />
    <meta property="og:url" content="페이지 URL" />
    <meta property="og:image" content={data?.images[0] || ''} />

    <meta name="twitter:title" content={data?.category || headInfo?.title} />
    <meta name="twitter:description" content="공유 설명" />
    <meta name="twitter:image" content={data?.images[0] || ''} />
  </Head>
);

const HeadComponents = {
  DefaultHead,
  PageHead,
};

export default HeadComponents;
