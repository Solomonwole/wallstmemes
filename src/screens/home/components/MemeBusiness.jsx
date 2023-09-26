import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

function MemeBusiness() {
  return (
    <>
      <Box mt={15} sx={{ position: "relative" }}>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            position: "absolute",
            left: "150px",
            top: "-130px",
          }}
        >
          <img
            src="https://wallstmemes.com/assets/images/svg-icons/meme-1.svg"
            alt=""
          />
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            position: "absolute",
            right: "150px",
            top: "-130px",
          }}
        >
          <img
            src="https://wallstmemes.com/assets/images/svg-icons/meme-2.svg"
            alt=""
          />
        </Box>
        <Container maxWidth="sm">
          <Typography variant="h1" align="center" mb={5}>
            WE MEME BUSINESS!
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 3,
            }}
          >
            <Stack spacing={1}>
              <Typography variant="h3" mb={5}>
                1M+
              </Typography>
              <Typography
                variant="h4"
                sx={{ color: "#717d85" }}
                align="center"
                mb={5}
              >
                COMMUNITY
              </Typography>
            </Stack>
            <Stack spacing={1}>
              <Typography variant="h3" mb={5}>
                40M+
              </Typography>
              <Typography
                variant="h4"
                sx={{ color: "#717d85" }}
                align="center"
                mb={5}
              >
                IMPRESSIONS <br /> PER MONTH
              </Typography>
            </Stack>
            <Stack spacing={1}>
              <Typography variant="h3" mb={5} align="center">
                UNLIMITED
              </Typography>
              <Typography
                variant="h4"
                sx={{ color: "#717d85" }}
                align="center"
                mb={5}
              >
                MEMES
              </Typography>
            </Stack>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            mt={10}
          >
            <img
              src="https://wallstmemes.com/assets/images/svg-icons/wow.svg"
              alt=""
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "212px",
              }}
            />
          </Box>

          <Typography variant="h1" align="center" mt={10}>
            EVEN ELON LOVES OUR MEMES!
          </Typography>
          <Typography variant="body1" align="center" mt={3}>
            Wall Street Memes brings you the long-awaited token for a vibrant
            community followed and engaged with by even Elon Musk.
          </Typography>
        </Container>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            overflow: "auto",
            mt: 5,
          }}
        >
          {images.map((data, index) => {
            return (
              <img
                src={data.src}
                key={index}
                alt=""
                style={{ width: "456.5px" }}
              />
            );
          })}
        </Box>
      </Box>
    </>
  );
}

export default MemeBusiness;

const images = [
  {
    src: "https://wallstmemes.com/assets/images/memes/6.png",
  },
  {
    src: "https://wallstmemes.com/assets/images/memes/1.png",
  },
  {
    src: "https://wallstmemes.com/assets/images/memes/2.png",
  },
  {
    src: "https://wallstmemes.com/assets/images/memes/3.png",
  },
  {
    src: "https://wallstmemes.com/assets/images/memes/4.png",
  },
  {
    src: "https://wallstmemes.com/assets/images/memes/5.png",
  },
];
