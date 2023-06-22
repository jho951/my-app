import Banner from '../components/organism/banner/Banner';

import { PageHead } from '../components/atoms/htmlHead/HtmlHead';
import SideBar from '../components/organism/sideBar/SideBar';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function MyComponent() {
  const { t } = useTranslation('common');

  return (
    <>
      <PageHead title="해피매디온" desrciption="메인페이지" keyword="homepage" />
      <Banner />
      <SideBar />
    </>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
