import { createContext, useContext, useEffect, useState } from "react";
import Web3 from "web3";

export const Web3Context = createContext({
  web3: null,
  setWeb3: () => {},
  address: null,
  setAddress: () => {},
  logout: () => {},
  registerNewUser: async (username, account) => {},
  loading: false,
  tryConnectWallet: () => {},
  userData: null,
  setUserData: () => {},
});

const Web3Provider = ({ children }) => {
  const [CryptoStack, setCryptoStack] = useState();
  const [CryptoStackNFT, setCryptoStackNFT] = useState();
  const [web3, setWeb3] = useState(null);
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    (async () => {
      const web3Connected = await tryConnectWallet();
      setWeb3(web3Connected);
      // loadBlockchainData(web3Connected);
    })();
  }, []);

  const logout = () => {
    setAddress(null);
  };

  // const loadBlockchainData = async (web3) => {
  //   const networkId = await web3.eth.net.getId();
  //   const csMainData = CryptoStackMain.networks[networkId];
  //   const csNFTData = CryptoStackRewardNFT.networks[networkId];

  //   if (csMainData && csNFTData) {
  //     setCryptoStack(
  //       new web3.eth.Contract(CryptoStackMain.abi, csMainData.address)
  //     );
  //     setCryptoStackNFT(
  //       new web3.eth.Contract(CryptoStackRewardNFT.abi, csNFTData.address)
  //     );
  //     return true;
  //   } else {
  //     window.alert(
  //       "Unidentified network, please connect to Celo or Alfajores Network"
  //     );
  //     return false;
  //   }
  // };

  const getUserInfo = async () => {
    const isRegistered = await CryptoStack.methods
      .isRegisteredUser(address)
      .call();
    if (isRegistered) {
      const uCount = await CryptoStack.methods.userCount().call();

      for (let i = 0; i < uCount; ++i) {
        const user = await CryptoStack.methods.users(i).call();
        if (user.userAddress.toLowerCase() === address.toLowerCase()) {
          return user;
        }
      }
    } else {
      return null;
    }
  };

  const getUsername = async (account) => {
    const isRegistered = await CryptoStack.methods
      .isRegisteredUser(address)
      .call();
    if (isRegistered) {
      const uCount = await CryptoStack.methods.userCount().call();

      for (let i = 0; i < uCount; ++i) {
        const user = await CryptoStack.methods.users(i).call();
        if (user.userAddress.toLowerCase() === account.toLowerCase()) {
          return user.userName;
        }
      }
    } else {
      return null;
    }
  };

  const registerNewUser = async (username) => {
    setLoading(true);
    await CryptoStack.methods
      .registerNewUser(username)
      .send({ from: address })
      .on("transactionHash", function (hash) {})
      .on("receipt", function (receipt) {})
      .on("confirmation", (confirmationNumber, receipt) => {
        setLoading(false);
      })
      .on("error", (error, receipt) => {
        window.alert("Error occured:", error);
        setLoading(false);
      });
  };

  const tryConnectWallet = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.enable();
        const accounts = await window.web3.eth.getAccounts();
        setAddress(accounts?.[0]);
        return window.web3;
      } catch (error) {
        alert(error);
      }
    } else if (window.web3) {
      window.web3 = new Web3(web3.currentProvider);
      const accounts = await window.web3.eth.getAccounts();
      setAddress(accounts?.[0]);
      return window.web3;
    } else {
      console.log(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };

  return (
    <Web3Context.Provider
      value={{
        web3,
        setWeb3,
        address,
        setAddress,
        logout,
        registerNewUser,
        getUserInfo,
        getUsername,
        loading,
        tryConnectWallet,
        userData,
        setUserData,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};

export default Web3Provider;

export const useWeb3 = () => {
  const {
    address,
    loading,
    logout,
    registerNewUser,
    setAddress,
    setUserData,
    setWeb3,
    tryConnectWallet,
    userData,
    web3,
  } = useContext(Web3Context);

  return {
    address,
    loading,
    logout,
    registerNewUser,
    setAddress,
    setUserData,
    setWeb3,
    tryConnectWallet,
    userData,
    web3,
  };
};
