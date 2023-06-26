import { PageHead } from '../components/atoms/htmlHead/HtmlHead';

import Banner from '../components/organism/banner/Banner';

import SideBar from '../components/organism/sideBar/SideBar';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { Layout } from '../components/templates/layout/Layout';
import { CustomButton } from '../components/atoms/button/Button';
import { PROJECT_NAME } from '../utils/constants/project';
import { skipNavigation } from '../utils/utils';

const headInfo = { id: 'mainPage', title: '해피메디온', description: '메인페이지', keyword: 'homepage' };

export default function MyComponent() {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <PageHead headInfo={headInfo} />
      <h1 className="visuallyhidden">{PROJECT_NAME}</h1>
      <CustomButton design="skip" onClick={() => skipNavigation('main')}>
        병원메뉴
      </CustomButton>
      <Banner t={t} />
      <SideBar />
    </Layout>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
