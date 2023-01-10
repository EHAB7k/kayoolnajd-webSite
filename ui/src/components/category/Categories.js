import React from "react";
import serviceAltmooh from "../../static/serviceAltmooh.jpg";
import osoulAlsenaahImage from "../../static/OsoulAlsenaah.jpg";
import altmoohAljadeed from "../../static/AltmoohAljadeed.jpg";
import alt3 from "../../static/alt3.jpg";
import alt5 from "../../static/alt5.jpeg";
import { Box, Stack, styled, Typography,Link } from "@mui/material";
import { NavLink } from "react-router-dom";
const StyledBox = styled(Box)({

  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
  opacity: "0.8",
  margin: 2
  
});
// const StyledTypography = styled(Typography)({
//   margin: "25% 50px 25% 50px",
//   background: "white",
//   opacity: "0.8",
// });
const Categories = () => {
  return (
   
    <Box >
      <Typography color={"black"} align="center" variant="h3" m={2}>
             شركاتنا
             </Typography>
             <Stack
    direction={{ xs: "column"  , sm: "row" }}
    justifyContent="center"
    alignItems="center"
    spacing={2}
    marginBottom= "10%"
  
         
        // spacing={{ xs: 2, sm: 0, md: 4 }}
        
        // mt={2}
        // sx={{display: "flex",
        //   }}
         
        //  marginLeft={{xs:19,sm:1, md:-8}}
        
   // transform: translate(-50%,-50%);
  

  >   

       
      
        
        <NavLink
        to="/altmoohL"
        
      >
        <StyledBox sx={{ backgroundImage: `url(${alt5})`,height: 230,
  width: 230,}}>
         
         
        </StyledBox>
        </NavLink>
        <NavLink
        to="/altmoohConcrete"
        // sx={{ textDecoration: "none" }}
      >
        <StyledBox sx={{ backgroundImage: `url(${alt3})`,height: 230,
  width: 230,}}>
          

        </StyledBox>
        </NavLink>

        <NavLink
        to="/altmoohS"
        
      >

        <StyledBox sx={{ backgroundImage: `url(${serviceAltmooh})`,height: 230,
         width: 230,}}>
          

        </StyledBox>
        </NavLink>

        <NavLink
        to="/altmoohAljadeedM"
        // sx={{ textDecoration: "none" }}
      >
        <StyledBox sx={{ backgroundImage: `url(${altmoohAljadeed})` ,height: 230,
         width: 230, }}>
             
        </StyledBox>
        </NavLink>
                
        <NavLink
        to="/osoulAlsenaahD"
        
      > 
      <StyledBox sx={{ backgroundImage: `url(${osoulAlsenaahImage})`,height: 200,
      width: 230, mt:1}} >
          

        </StyledBox>
        </NavLink>
       
      </Stack>
     
    </Box>

   
  );
};

export default Categories;
