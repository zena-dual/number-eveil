import 'destyle.css';
import Head from 'next/head';
import { useEffect } from 'react';

interface Props<ComponentProps> {
  Component: (props: ComponentProps) => JSX.Element;
  pageProps: ComponentProps;
}

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
const App = ({ Component, pageProps }: Props<any>) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>ナンバーズ・エヴァイユシミュレーター</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <script async charSet="utf-8" src="https://platform.twitter.com/widgets.js" />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default App;
