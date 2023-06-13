import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import ContactIcons from "../components/ContactIcons";
import useScrollFadeIn from "../hooks/useScrollFadeIn";

function Home() {
  const animatedItem = {
    0: useScrollFadeIn("down", 1, 0),
    1: useScrollFadeIn("down", 1, 0.2),
    2: useScrollFadeIn("down", 1, 0.3),
    3: useScrollFadeIn("down", 1, 0.4),
  };
  return (
    <Box className="homePage">
      <Box
        sx={{
          position: "absolute",
          backgroundColor: "#0a0a0a",
          width: "100%",
          height: { md: "75%", sm: "80%", xs: "115%" },
        }}
      ></Box>
      <Box
        sx={{
          pt: { sm: "50px", xs: "30px" },
          pb: { sm: "50px", xs: "50px" },
          position: "relative",
          width: "100%",
        }}
      >
        <Container>
          <Grid container spacing={1}>
            <Grid
              item
              sm={6}
              xs={12}
              sx={{ display: { md: "none", xs: "block" } }}
            >
              <Box p={2} className="letterEffectRight">
                <Typography align="center" p={3} pt={5}>
                  <img
                    className="homeImg"
                    src={`${process.env.PUBLIC_URL}/images/homeImg.jpg`}
                    alt="Profile Image"
                    style={{ borderRadius: 30 }}
                  />
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Box className="letterEffectLeft" p={2}>
                <Typography
                  mb={3}
                  color="#ffffff"
                  sx={{
                    pt: { sm: 10, xs: 0 },
                    typography: "subtitle1",
                  }}
                >
                  <span style={{ letterSpacing: -0.5 }}>
                    Hi 👋, I'm
                  </span>
                </Typography>
                <Typography
                  color="primary"
                  sx={{
                    typography: { sm: "h3", xs: "h4" },
                    mb: { sm: 4, xs: 3 },
                  }}
                >
                  <span>
                    <b>Fernando</b>
                  </span>
                </Typography>
                <Typography
                  color="#ffffff"
                  sx={{
                    mb: { sm: 5, xs: 4 },
                    fontSize: { sm: "14.5px", xs: "12px" },
                  }}
                >
                  An eight-semester student of the Computer Science and Technology Engineering degree at ITESM with a grade point average of 95 looking for internships or job.

                  <br />
                  I can demonstrate my skills and improve them; With initiative and desire to continue learning tools and job skills.
                  <br />
                  I consider myself a responsible and results-oriented person.
                </Typography>
                <Grid className="homeContact" container>
                  <Grid item sm={6} xs={12}>
                    <Box
                      sx={{
                        fontSize: { sm: "19px", xs: "15px" },
                        pl: 1,
                        pr: 1,
                      }}
                    >
                      <ContactIcons />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid
              item
              sm={6}
              xs={12}
              sx={{ display: { md: "block", xs: "none" } }}
            >
              <Box p={2} className="letterEffectRight">
                <Typography align="center" p={3} pt={5}>
                  <img
                    className="homeImg"
                    src={`${process.env.PUBLIC_URL}/images/homeImg.jpg`}
                    alt="Profile Image"
                    style={{ borderRadius: 30 }}
                  />
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
