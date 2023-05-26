import {QueryClient, QueryClientProvider, Hydrate} from "react-query"
import {ThemeProvider} from "../styles/Global/GlobalStyled"
import {AppProps} from "next/app"

export default function MyApp({Component, pageProps}) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}
