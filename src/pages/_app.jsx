import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import { Layout } from "../components/Templates/Layout";

export default function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  );
}
