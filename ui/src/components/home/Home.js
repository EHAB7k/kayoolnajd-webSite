import { Box, Container, Stack } from "@mui/material";
import React from "react";
import Categories from "../category/Categories";
import Hero from "../hero/Hero";
import Recents from "../recents/Recents";


const Home = () => {
 
  return (
    <Box>
       
      <Container>
       
         <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        > 
        <Hero />
         <Categories />
        <Recents />
        <br/>

        </Stack> 
      </Container> 
    </Box>
  );
};

export default Home;
