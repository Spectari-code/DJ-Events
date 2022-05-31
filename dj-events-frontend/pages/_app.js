// MyApp component initializes pages

import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  // Returns whatever page I'm at, for example if I'm in home page it returns the Home component
  return <Component {...pageProps} />;
}

export default MyApp;
