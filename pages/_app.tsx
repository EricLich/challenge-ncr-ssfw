import type { AppProps } from "next/app";

import AccountsProvider from "../components/Accounts";
import Layout from "../components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AccountsProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AccountsProvider>
  );
}
