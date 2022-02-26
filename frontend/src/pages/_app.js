import React from "react";
import MetaTags from "../components/MetaTags";
import { NavbarLayout } from "../layouts";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <MetaTags
        title={"CryptoRebels"}
        desc={"CryptoRebels"}
        img={"/favicon.ico"}
        keywords={"crypto,nft,rebel,rebels,market"}
      />
      <NavbarLayout>
        <Component {...pageProps} />
      </NavbarLayout>
    </React.Fragment>
  );
};

export default App;
