import "bootswatch/dist/cyborg/bootstrap.min.css";
import "../styles/styles.css";
import Head from "next/head";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { TransAnimation } from "../helpers/helpers";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>My Portfolio</title>
      </Head>

      <AnimatePresence mode="wait">
        <motion.div key={router.pathname}>
          <Layout>
            <Component {...pageProps} />
            <motion.div
              className="transition"
              variants={TransAnimation}
              initial="hidden"
              animate="show"
              transition={{ duration: 1.2 }}
            ></motion.div>
          </Layout>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
