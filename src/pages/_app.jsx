import React from "react"
import {QueryClient, QueryClientProvider, Hydrate} from "react-query"
import {GlobalStyle} from "../styles/Global/GlobalStyled"

export default function MyApp({Component}) {
  const queryClient = new QueryClient()
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Hydrate>
          <Component />
        </Hydrate>
      </QueryClientProvider>
    </React.Fragment>
  )
}
