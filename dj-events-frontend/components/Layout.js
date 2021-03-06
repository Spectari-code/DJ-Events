import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import ShowCase from "./Showcase";
import styles from "@/styles/Layout.module.css";

// pass children as props because Layout components wraps all the page's content
export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Header />

      {/* Limit showcase component to only dispaly banner on home page using useRouter:
        if router path is equal to home/root then render the showcase component */}
      {router.pathname === "/" && <ShowCase />}

      <div className={styles.container}>{children}</div>

      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "DJ Events | Find the hottest parties",
  description: "Find the latest DJ and other musical events",
  keywords: "music, dj, edm, events,",
};
