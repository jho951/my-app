import React from "react";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import { Layout } from "../components/Templates/Layout";
import { Provider } from "jotai";
import LayoutContextProvider from "../components/Templates/Layout.Styled";

export default function MyApp({ Component, pageProps }) {
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
