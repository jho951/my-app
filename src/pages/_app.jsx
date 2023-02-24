import React from "react"
import {QueryClient, QueryClientProvider, Hydrate} from "react-query"
import {ThemeProvider} from "../styles/Global/GlobalStyled"
import "../styles/Global/global.css"

export default function MyApp({Component}) {
  const queryClient = new QueryClient()
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        {/* <GlobalStyle /> */}
        <Hydrate>
          <ThemeProvider>
            <Component />
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </React.Fragment>
  )
}
