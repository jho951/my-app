import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import { Layout } from '../../components/templates/layout/Layout';
import { PageHead } from '../../components/atoms/htmlHead/HtmlHead';

import Login from '../../components/templates/layout/login/Login';

const headInfo = { id: 'loginPage', title: '로그인 페이지', description: '로그인페이지', keyword: 'login' };

export default function Index() {
  const { t } = useTranslation('common');
  return (
    <Layout t={t}>
      <PageHead headInfo={headInfo} />
      <Login />
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
