import RouterPage from "./router/RouterPage";
import { ThemeProvider } from "@mui/material";
import theme from "./mui/theme";
import React, { useContext, useEffect } from "react";
import appContext from "./context/AppContext";
import Web3 from "web3";

function App() {
  const { setIsMetamaskInstalled, setWeb3, setIsConnected } =
    useContext(appContext);

  useEffect(() => {
    const checkMetamaskInstallation = () => {
      if (typeof window.ethereum !== "undefined") {
        setIsMetamaskInstalled(true);
        setWeb3(new Web3(window.ethereum));
      }
    };

    const checkConnection = () => {
      if (
        typeof window.ethereum !== "undefined" &&
        window.ethereum.selectedAddress
      ) {
        setIsConnected(true);
      } else {
        setIsConnected(false);
      }
    };

    checkMetamaskInstallation();
    checkConnection();
  }, [setIsConnected, setIsMetamaskInstalled, setWeb3]);

  return (
    <ThemeProvider theme={theme}>
      <RouterPage />
    </ThemeProvider>
  );
}

export default App;
