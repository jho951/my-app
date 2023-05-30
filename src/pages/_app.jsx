import React from "react"
import {QueryClient, QueryClientProvider, Hydrate} from "react-query"
import {Layout} from "../components/Templates/Layout"
import {Provider} from "jotai"

export default function MyApp({Component, pageProps}) {
  const queryClientRef = React.useRef()
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Provider>
        <Hydrate state={pageProps.dehydratedState}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Hydrate>
      </Provider>
    </QueryClientProvider>
  )
}
