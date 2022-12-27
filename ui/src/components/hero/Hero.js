import React from "react";
import { Box, Typography } from "@mui/material";
import HeroImage from "../../static/00jYRQN-arabian-horse-wallpaper.jpg";
 import postImage5 from "../../static/image5.jpg";
const Hero = () => {
  return (
    <Box>
      
      <Box
        sx={{
           backgroundImage: `url(${HeroImage})`,
           
           backgroundRepeat: "no-repeat",
           backgroundColor: "dark",
           backgroundAttachment: "fixed",
           backgroundPosition: "center",
          backgroundSize: "cover",
          height: 700,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          opacity: "0.8",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "50%", md: "50%" },
            padding: { xs: 3, sm: 2, md: 9 },
            margin:"50px"
          }}
        >
          <Box sx={{ background: "black",}} style={{

            alignItems: 'center',
            justifyContent: 'center',
            opacity: "0.8",
          }}>
            
            {/* <Typography component="img" src={postImage5} maxHeight={150} style={{marginLeft: -53}} >
            
            </Typography> */}
            <Typography variant="h3" align="center" color={"#17a2b8"} >
            <br/>
            شركة خيول نجد القابضة
            <br/>
            </Typography>
            <Typography variant="h5" align="center" color={"white"} >
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
