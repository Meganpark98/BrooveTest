import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";


import MainLayout from "../layout/mainLayout";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  return (
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
  );
}

export default MyApp;
