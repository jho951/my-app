import React from "react"
import {QueryClient, QueryClientProvider, Hydrate} from "react-query"
import "../styles/globals.css"

export default function MyApp({Component, pageProps}) {
  const queryClient = new QueryClient()
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <Hydrate>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </React.Fragment>
  )
}
