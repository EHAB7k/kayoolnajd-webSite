import { Box, Container, Stack } from "@mui/material";
import React from "react";
import Categories from "../category/Categories";
import Hero from "../hero/Hero";
import Recents from "../recents/Recents";
import Rightbar from "../rightbar/Rightbar";

const Home = () => {
  return (
    <Box>
       <Hero />
      <Container>
        <Categories />
        
        {/* <hr /> */}
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Box >
            <Recents />
          </Box>
          <Box flex={1}>
            <Rightbar />
          </Box>
        </Stack> 
      </Container> 
    </Box>
  );
};

export default Home;
