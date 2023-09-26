import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import appContext from "../../../context/AppContext";

function HeroSection() {
  const { appData, timeRemaining } = useContext(appContext);
  return (
    <>
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          pt={15}
        >
          <img
            src="https://wallstmemes.com/assets/images/center-title.svg"
            alt=""
          />
          <Stack direction="row" spacing={1} mt={3}>
            <a
              href="https://www.instagram.com/wallstbets/?igshid=MzRlODBiNWFlZA%3D%3D"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://wallstmemes.com/assets/images/svg-icons/instagram.png"
                alt=""
                style={{ widtht: "43px", height: "43px" }}
              />
            </a>
            <a
              href="https://twitter.com/wallstmemes"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://wallstmemes.com/assets/images/svg-icons/twitter.svg"
                alt=""
                style={{ widtht: "43px", height: "43px" }}
              />
            </a>
            <a
              href="https://t.me/wallst_memes"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://wallstmemes.com/assets/images/svg-icons/telegram.svg"
                alt=""
                style={{ widtht: "43px", height: "43px" }}
              />
            </a>
            <a
              href="https://discord.com/invite/4E538pzeGX"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://wallstmemes.com/assets/images/svg-icons/discord.svg"
                alt=""
                style={{ widtht: "43px", height: "43px" }}
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCi-M8QFGjDbBQRY5lnl3x-g"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://wallstmemes.com/assets/images/svg-icons/youtube.svg"
                alt=""
                style={{ widtht: "43px", height: "43px" }}
              />
            </a>
            <a
              href="https://www.tiktok.com/@wallstreetmemesofficial"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://wallstmemes.com/assets/images/svg-icons/tiktok.svg"
                alt=""
                style={{ widtht: "43px", height: "43px" }}
              />
            </a>
          </Stack>

          <Box
            sx={{
              background: "#fff",
              borderRadius: "1rem",
              border: "3px #000 solid",
              minHeight: "460px",
              width: "100%",
              margin: "20px auto",
            }}
          >
            <Box
              sx={{
                width: "100%",
                background: "#000",
                borderRadius: "0.8rem 0.8rem 0 0",
              }}
            >
              <Stack spacing={1} p={2}>
                <Typography variant="h4" color="secondary.main" align="center">
                  {appData.okx_listing}
                </Typography>
                <Typography variant="h4" color="secondary.main" align="center">
                  {appData.claim_live_in}
                </Typography>

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr 1fr",
                    gap: { xs: 1, md: 2 },
                    p: 2,
                  }}
                >
                  <Box
                    sx={{
                      minWidth: "60px",
                      height: "31px",
                      background: "#fff",
                      padding: "8px 3px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "10px",
                    }}
                  >
                    {timeRemaining.days}d
                  </Box>
                  <Box
                    sx={{
                      minWidth: "60px",
                      height: "31px",
                      background: "#fff",
                      padding: "8px 3px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "10px",
                    }}
                  >
                    {timeRemaining.hours}h
                  </Box>
                  <Box
                    sx={{
                      minWidth: "60px",
                      height: "31px",
                      background: "#fff",
                      padding: "8px 3px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "10px",
                    }}
                  >
                    {timeRemaining.minutes}m
                  </Box>
                  <Box
                    sx={{
                      minWidth: "60px",
                      height: "31px",
                      background: "#fff",
                      padding: "8px 3px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "10px",
                    }}
                  >
                    {timeRemaining.seconds}s
                  </Box>
                </Box>

                <Typography variant="h4" color="secondary.main" align="center">
                  {appData.m_exchange}
                </Typography>
              </Stack>
            </Box>

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              p={2}
            >
              <Box sx={{ borderBottom: "1px solid #737373", width: "20%" }} />
              <Typography variant="h5" sx={{ fontWeight: 500 }}>
                1 WSM = $0.0337
              </Typography>
              <Box sx={{ borderBottom: "1px solid #737373", width: "20%" }} />
            </Stack>

            <Stack p={2} spacing={2}>
              <Button variant="contained" fullWidth>
                Connect Wallet
              </Button>
              <Button variant="contained" fullWidth>
                Sign up for OKX
              </Button>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
                mt={3}
              >
                <Typography>Powered by </Typography>
                <img
                  src="https://wallstmemes.com/assets/images/svg-icons/W3P_Black.svg"
                  alt=""
                  style={{ height: "15px" }}
                />
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default HeroSection;
