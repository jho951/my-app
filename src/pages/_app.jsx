import React, {useEffect, useState} from "react"
import {QueryClient, QueryClientProvider, Hydrate} from "react-query"
import {Provider} from "jotai"
import LayoutContextProvider from "../components/templates/Layout.Styled"
import {Layout} from "../components/templates/Layout"
import {appWithTranslation} from "next-i18next"

function MyApp({Component, pageProps}) {
  const [translations, setTranslations] = useState({})
  const queryClientRef = React.useRef()
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }

  // useEffect(() => {
  //   const fetchTranslationsData = async () => {
  //     const locale = "en"
  //     const translationData = await fetchTranslation(locale)
  //     setTranslations(translationData)
  //   }

  //   fetchTranslationsData()
  // }, [])

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
  )
}

export default MyApp
