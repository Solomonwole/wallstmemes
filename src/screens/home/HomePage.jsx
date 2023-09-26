import { Box } from "@mui/material";
import React from "react";
import HeroSection from "./components/HeroSection";
import MemeBusiness from "./components/MemeBusiness";

function HomePage() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url("https://wallstmemes.com/assets/images/banner-desktop.svg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          pb: { md: 10 },
          "@media (max-width: 600px)": {
            backgroundImage: "none",
          },
        }}
      >
        <HeroSection />
      </Box>
      <img
        src="https://wallstmemes.com/assets/images/banner-desktop.svg"
        alt=""
        style={{
          display: { xs: "flex", md: "none" },
          maxWidth: "100%",
        }}
      />
      <MemeBusiness />
    </>
  );
}

export default HomePage;
