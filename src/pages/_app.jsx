import React from "react"
import {QueryClient, QueryClientProvider, Hydrate} from "react-query"
import {ThemeProvider} from "../styles/Global/GlobalStyled"

export default function MyApp({Component, pageProps}) {
  const queryClient = new QueryClient()
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        {/* <GlobalStyle /> */}
        <Hydrate>
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </React.Fragment>
  )
}
