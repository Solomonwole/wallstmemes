import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 490,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    h1: {
      fontSize: "2.5rem",
      fontFamily: "Balsamiq Sans",
    },
    h2: {
      fontSize: "35px",
      fontFamily: "Balsamiq Sans",
    },
    h3: {
      fontSize: "25px",
      fontFamily: "Balsamiq Sans",
    },
    h4: {
      fontSize: "18px",
      fontFamily: "Work Sans",
    },
    h5: {
      fontSize: "16px",
      fontFamily: "Work Sans",
    },
    body1: {
      fontSize: "16px",
      fontFamily: "Work Sans",
    },
    caption: {
      fontSize: "14px",
      fontFamily: "Work Sans",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "30px",
          textTransform: "capitalize",
          minWidth: "128px",
          minHeight: "50px",
        },
        contained: {
          boxShadow: "none",
          background: "#000",
          color: "#fff",
          "&:hover": {
            boxShadow: "none",
            background: "#000",
            color: "#fff",
          },
        },
      },
    },
  },
});

export default theme;
