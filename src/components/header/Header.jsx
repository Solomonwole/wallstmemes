import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import appContext from "../../context/AppContext";
import { LuMenu } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const { appData, timeRemaining, connectMetamask } = useContext(appContext);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          top={0}
          sx={{
            background: "#ffffffdf",
            height: { md: "76px" },
            display: "flex",
            justifyContent: "center",
            pt: { md: 2.3 },
            zIndex: 100,
          }}
          elevation={0}
        >
          <Toolbar>
            {/* Desktop  */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                width: "100%",
              }}
            >
              <Container maxWidth="xl">
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Link to="/">
                    <img
                      src="https://wallstmemes.com/assets/images/svg-icons/wall-street.svg"
                      alt="wall street"
                      style={{ width: "50px", height: "40px" }}
                    />
                  </Link>

                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    sx={{
                      a: {
                        color: "#000",
                        fontFamily: "Work Sans",
                        fontWeight: 600,
                        textDecoration: "none",
                        fontSize: "16px",
                      },
                    }}
                  >
                    <NavLink to="/" onClick={connectMetamask}>
                      Staking
                    </NavLink>
                    <NavLink to="/" onClick={connectMetamask}>
                      Community
                    </NavLink>
                    <NavLink onClick={connectMetamask}>About</NavLink>
                    <NavLink to="/" onClick={connectMetamask}>
                      Media
                    </NavLink>
                  </Stack>

                  <Button variant="contained" onClick={connectMetamask}>
                    Stack Now
                  </Button>
                  <IconButton sx={{ display: { xs: "flex", md: "none" } }}>
                    <LuMenu color="#000" size={30} />
                  </IconButton>
                </Stack>
              </Container>
            </Box>

            {/* Mobile  */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box>
                <img
                  src="https://wallstmemes.com/assets/images/svg-icons/wall-street.svg"
                  alt="wall street"
                  style={{ width: "50px", height: "40px" }}
                />
              </Box>
              <Button variant="contained">Stack Now</Button>
              <IconButton>
                <LuMenu color="#000" size={30} />
              </IconButton>
            </Box>
          </Toolbar>
          <AppBar
            position="sticky"
            top={75}
            elevation={0}
            sx={{
              height: { xs: "60px", md: "30px" },
              display: "flex",
              justifyContent: "center",
              zIndex: 99,
            }}
          >
            <Toolbar>
              <Container
                maxWidth="xl"
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  color="secondary.main"
                  align="center"
                  sx={{ width: { xs: "68%", sm: "100%" }, fontSize: "13px" }}
                >
                  {appData.tier1_exchange} {timeRemaining.days}d{" "}
                  {timeRemaining.hours}h {timeRemaining.minutes}m{" "}
                  {timeRemaining.seconds}s
                </Typography>
              </Container>
            </Toolbar>
          </AppBar>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;
