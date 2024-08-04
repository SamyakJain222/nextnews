import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "./Home.module.css";

import Header from "@/components/Header/Header";
import Card from "@/components/UI/Card/Card";
import Footer from "@/components/Footer/Footer";
import ErrorDialog from "@/components/UI/ErrorDialog/ErrorDialog";

import newsFetcher from "@/lib/newsFetcher";
import getThemeObj from "@/lib/domainTheming";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
  // Fetch the data from external API
  const fetchedData = await newsFetcher();

  // Pass data to the page via props
  return {
    props: {
      fetchedData,
    },
    // Update News data hourly
    revalidate: 3600,
  };
}

export async function getStaticPaths(index) {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default function Home(props) {
  const [themeObj, setThemeObj] = useState({});

  useEffect(() => {
    setThemeObj(getThemeObj(window.location.host));    
  }, []);
  
  return (
    <>
      <Head>
        <title>Next News</title>
        <meta name="description" content="Get all your sports news!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header themePath={themeObj.Header} />
      {props.fetchedData.length > 0 ? (
        <div className={styles["news-container"]}>
          {props.fetchedData.map((article, index) => (
            <Card
              key={index}
              artLink={article.links.web.href}
              artHeadline={article.headline}
              artImg={article.images[0].url}
              artDesc={article.description}
              themePath={themeObj.Card}
            />
          ))}
        </div>
      ) : (
        <ErrorDialog />
      )}

      <Footer themePath={themeObj.Footer} />
    </>
  );
}
