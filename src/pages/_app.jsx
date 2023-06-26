import React from 'react';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import { Provider } from 'jotai';

import '../styles/scss/style.scss';
import LayoutContextProvider from '../components/templates/Layout.Styled';

function MyApp({ Component, pageProps }) {
  const queryClientRef = React.useRef();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 50000,
          cacheTime: 50000,
          refetchOnMount: true,
          refetchOnReconnect: false,
          refetchOnWindowFocus: false,
          suspense: false,
        },
      },
    });
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <Provider>
          <LayoutContextProvider>
            <Component {...pageProps} />
          </LayoutContextProvider>
        </Provider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
