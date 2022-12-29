import { Box,Container, Stack, Typography } from "@mui/material";
import React from "react";
import postImage from "../../static/serviceAltmooh.jpg";

import Categories from "/Users/ehabhakmi/Desktop/kayoolnajd-webSite/ui/src/components/category/Categories.js";

const AltmoohS = () => {
  return (
    
      <Container>
        <Stack
                
                direction={{ xs: "column"  , sm: "column" }}
                justifyContent="center"
                alignItems="center"
                spacing={2}
        >
          {/* <Hero/> */}
          <Categories/>
          
                <Box
                sx={{
                backgroundImage: `url(${postImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
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
                تعمل شركة الطموح الجديد للتشغيل والصيانة على إنشاء وإدارة وتشغيل وصيانة عدد من أسواق النفع العام، وتملك الشركة عدة عقود مع الأمانات في إنشاء وتشغيل مسالخ ذبح المواشي، وإدارة حظائر ومجمعات المواشي.
            </Typography>
          </Box>
          
        </Stack>
      </Container>
    
  );
};

export default AltmoohS;
