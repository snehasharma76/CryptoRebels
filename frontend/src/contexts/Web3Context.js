import { createContext, useContext, useEffect, useState } from "react";
import PatreonABI from "../../public/Patreon.json";
import Web3 from "web3";
import Login from "../components/Login";

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
  const [web3, setWeb3] = useState(null);
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [Patreon, setPatreon] = useState();
  const [displayPopup, setDisplayPopup] = useState(false);

  useEffect(() => {
    (async () => {
      if (web3) {
        await loadBlockchainData(web3);
      } else {
        const web3Connected = await tryConnectWallet();
        setWeb3(web3Connected);
      }
    })();
  }, [web3]);

  const logout = () => {
    setAddress(null);
  };

  const loadBlockchainData = async (web3) => {
    const networkId = await web3.eth.net.getId();
    if (networkId === 44787) {
      const patreon = new web3.eth.Contract(
        PatreonABI,
        "0x779B1337462bFEF915FEc5ddA868fA4E92255e54"
      );
      setPatreon(patreon);
      const user = getUserInfo(patreon);
      setUserData(user);
      return true;
    } else {
      window.alert(
        "Unidentified network, please connect to Celo or Alfajores Network"
      );
      return false;
    }
  };

  const getUserInfo = async (patreon = Patreon) => {
    const isRegistered = await patreon.methods.isRegisteredUser(address).call();
    if (isRegistered) {
      const user = await patreon.methods.getUserDetails(address).call();
      return user;
    } else {
      setDisplayPopup(true);
      return null;
    }
  };

  const getUserByAddress = async (addressUrl) => {
    const postCount = await Patreon.methods.postsCount().call();
    const creatorsCount = await Patreon.methods.creatorsCount().call();
    let subscribed = false;
    for (let i = 0; i < creatorsCount; i++) {
      const user = await Patreon.methods.users(i).call();
      if (user?.userAddress === addressUrl) {
        if (user?.subscribers?.indexOf(address) !== -1) {
          subscribed = true;
        }
      }
    }
    const posts = [];
    for (let i = 0; i < postCount; i++) {
      const post = await Patreon.methods.posts(i).call();
      if (
        post.creatorAddress === addressUrl &&
        (subscribed || addressUrl === address)
      ) {
        posts.push(post);
      }
    }
    const data = await Patreon.methods.getCreatorData(addressUrl).call();
    return [posts, data[1]];
  };

  const getCreators = async () => {
    const creatorsCount = await Patreon.methods.creatorsCount().call();
    const users = [];
    for (let i = 0; i < creatorsCount; i++) {
      const user = await Patreon.methods.users(i).call();
      users.push(user);
    }

    return users;
  };

  // const getUsername = async (account) => {
  //   const isRegistered = await CryptoStack.methods
  //     .isRegisteredUser(address)
  //     .call();
  //   if (isRegistered) {
  //     const uCount = await CryptoStack.methods.userCount().call();

  //     for (let i = 0; i < uCount; ++i) {
  //       const user = await CryptoStack.methods.users(i).call();
  //       if (user.userAddress.toLowerCase() === account.toLowerCase()) {
  //         return user.userName;
  //       }
  //     }
  //   } else {
  //     return null;
  //   }
  // };

  const registerNewUser = async (username, description, image) => {
    setLoading(true);
    await Patreon.methods
      .createUser(username, description, image)
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

  const createPost = async (title, description, image) => {
    setLoading(true);
    await Patreon.methods
      .createPost(title, description, image)
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

  const subscribeToCreator = async (creatorId, amount) => {
    let expiryDate = new Date();
    expiryDate.setMonth(expiryDate.getMonth() + 1);
    console.log(Date.parse(expiryDate));
    await Patreon.methods
      .subscribeToCreator(creatorId, Date.parse(expiryDate))
      .send({ from: address, value: amount })
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

  return (
    <Web3Context.Provider
      value={{
        web3,
        setWeb3,
        address,
        setAddress,
        logout,
        registerNewUser,
        // getUsername,
        loading,
        tryConnectWallet,
        userData,
        setUserData,
        getUserByAddress,
        Patreon,
        createPost,
        subscribeToCreator,
        getCreators,
      }}
    >
      {children}
      <Login visible={displayPopup} setVisible={setDisplayPopup} />
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
    getUserByAddress,
    Patreon,
    createPost,
    subscribeToCreator,
    getCreators,
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
    getUserByAddress,
    Patreon,
    createPost,
    subscribeToCreator,
    getCreators,
  };
};
