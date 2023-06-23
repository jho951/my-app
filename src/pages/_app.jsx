import React from 'react';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import '../styles/scss/style.scss';
import { Provider } from 'jotai';
import LayoutContextProvider from '../components/templates/Layout.Styled';
import { Layout } from '../components/templates/Layout';

function MyApp({ Component, pageProps }) {
  const queryClientRef = React.useRef();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Provider>
        <LayoutContextProvider>
          <Hydrate state={pageProps.dehydratedState}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Hydrate>
        </LayoutContextProvider>
      </Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
