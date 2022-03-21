import type { AppProps } from 'next/app'
import { GlobalStyle } from './globalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default MyApp
