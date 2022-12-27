import { Box, CardMedia, Container, Stack, Typography } from "@mui/material";
import React from "react";
import postImage from "../../static/alt5.jpeg";
import Rightbar from "../rightbar/Rightbar";
import Categories from "../category/Categories";

const AltmooL = () => {
  return (
    
<Container>
<Stack
        
        direction={{ xs: "column"  , sm: "column" }}
        justifyContent="center"
        alignItems="center"
        spacing={2}
>
  
  <Categories/>
  
        <Box
        sx={{
        backgroundImage: `url(${postImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "300px",
        height: 200,
        width: 195,
        margin: "auto"

        }}
      >

      </Box>   
  <Box sx={{ }}>            
    <Typography
      m={4}
      color={"gray"}
      variant="body1"
      sx={{ fontWeight: 900 }}
      align="center"
      marginBottom={14}
    >
       تسعى شركة الطموح الجديد للخدمات اللوجستية للمساهمة في دفع عجلة قطاع الخدمات اللوجستية لتقديم خدمة متميزة ذات جودة عالية والاستخدام الأمثل للموارد المتاحة. 

    </Typography>
  </Box>
  
</Stack>
</Container>



  );
};

export default AltmooL;
