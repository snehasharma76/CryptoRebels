import MetaTags from "../components/MetaTags";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <div className="text-white">
      <MetaTags
        title={"CryptoRebels"}
        desc={"CryptoRebels"}
        img={"/favicon.ico"}
        keywords={"crypto,nft,rebel,rebels,market"}
      />
      <Component {...pageProps} />
    </div>
  );
};

export default App;
