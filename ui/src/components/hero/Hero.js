import React from "react";
import { Box, Typography } from "@mui/material";
import HeroImage from "../../static/00jYRQN-arabian-horse-wallpaper.jpg";
 import postImage5 from "../../static/image5.jpg";
const Hero = () => {
  return (
    <Box>
      
      <Box
        sx={{
           backgroundImage:{md:`url(${HeroImage})`,xs:"none"}  ,
           
           backgroundRepeat: "no-repeat",
           backgroundColor: {md:`dark`,xs:"black"},
           backgroundAttachment: "fixed",
           backgroundPosition: "center",
          backgroundSize: "cover",
          height: { xs: "50%", sm: "50%", md: 670 },
          width: { xs: "100%", sm: "50%", md: "1500px" },
          display: "flex",
          justifyContent: "center",
          opacity: "0.8",
        }}
      >
        <Box
          sx={{
            height: { xs: "100%", sm: "50%", md: "50%" },
            width: { xs: "100%", sm: "50%", md: "50%" },
            padding: { xs: 1, sm: 2, md: 9 },
            margin:{ xs: "1px", sm: "50%", md: "70px" },
          }}
        >
          <Box sx={{ background: "black",}} style={{

            alignItems: 'center',
            justifyContent: 'center',
            opacity: "0.8",
          }}>
            
            {/* <Typography component="img" src={postImage5} maxHeight={150} style={{marginLeft: -53}} >
            
            </Typography> */}
            <Typography  variant="h3" align="center" color={"#17a2b8"}sx={{fontSize:{xs:"15px", md:"55px"},}} >
            <br/>
            شركة خيول نجد القابضة
            <br/>
            </Typography>
            <Typography variant="h5" align="center" color={"white"} sx={{fontSize:{xs:"10px", md:"32px"},}} >
             تسعى لأن تكون الأميز في تنوع الاستثمار، لذا تستثمر الشركة في عدة شركات، وتديرها بكفاءة في مختلف القطاعات الاقتصادية
            </Typography>
            <Typography variant="body1" align="center"  pb={8}>
             
            </Typography>
            
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
