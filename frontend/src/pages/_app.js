import MetaTags from "../components/MetaTags";
import Web3Provider from "../contexts/Web3Context";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <Web3Provider>
      <div className="text-white">
        <MetaTags
          title={"CryptoRebels"}
          desc={"CryptoRebels"}
          img={"/favicon.ico"}
          keywords={"crypto,nft,rebel,rebels,market"}
        />
        <Component {...pageProps} />
      </div>
    </Web3Provider>
  );
};

export default App;
