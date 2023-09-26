import RouterPage from "./router/RouterPage";
import { ThemeProvider } from "@mui/material";
import theme from "./mui/theme";
import React from "react";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterPage /> 
    </ThemeProvider>
  );
}

export default App;
