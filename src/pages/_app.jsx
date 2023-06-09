import React from "react"
import {QueryClient, QueryClientProvider, Hydrate} from "react-query"
import {Provider} from "jotai"
import LayoutContextProvider from "../components/templates/Layout.Styled"
import {Layout} from "../components/templates/Layout"
import {appWithTranslation} from "next-i18next"
// import {I18nextProvider} from "react-i18next"
// import i18n from "../utils/i18n"

function MyApp({Component, pageProps}) {
  const queryClientRef = React.useRef()
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      {/* <I18nextProvider i18n={i18n}> */}
      <Provider>
        <LayoutContextProvider>
          <Hydrate state={pageProps.dehydratedState}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Hydrate>
        </LayoutContextProvider>
      </Provider>
      {/* </I18nextProvider> */}
    </QueryClientProvider>
  )
}

export default MyApp
