import "@/styles/globals.css";
import NextNProgress from "nextjs-progressbar";

import type { AppProps } from "next/app";
import { RootLayout } from "@/components";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RootLayout>
      <NextNProgress
        color="#26bbff"
        height={2}
        startPosition={0}
        stopDelayMs={0}
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </RootLayout>
  );
};

export default App;
