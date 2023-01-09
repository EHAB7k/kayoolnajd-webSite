import { Box,Container, Stack, Typography } from "@mui/material";
import React from "react";
import postImage from "../../static/alt3.jpg";
import Categories from "../category/Categories";


const AltmoohConcrete = () => {
  return (
    <Box >
            <Box
        sx={{
          backgroundImage: `url(${postImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: 200,
          width: 230,
          mt:1,
          marginLeft: 66
             
        }}
      >
        <Categories/>
        
      </Box>
      <Container>
        
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 1, sm: 2, md: 8 }}
          mt={0}
        >
            
          <Box flex={6} sx={{ padding: "18px 100px 100px 100px" }}>
            
            

            
            <Typography
              m={4}
              color={"gray"}
              variant="body1"
              sx={{ fontWeight: 900 }}
              align="center"
            >
                تعنى شركة الطموح الجديد للخرسانة الجاهزة بإنتاج الخرسانة الجاهزة لتلبية احتياج قطاع البناء وتوفير منتج ذو جودة عالية ودرجة ممتازة.
شركة الطموح الجديد حاصلة على شهادة الجودة وشهادة السلامة والصحة المهنية 
ISO 9001—ISO 45001
تحرص شركة الطموح الجديد على أن يكون المنتج بأعلى مستوى من الجودة لذا فإن لديها مختبر خاص بضبط جودة الخرسانة وعمل الاختبارات اللازمة.

            </Typography>
           
          </Box>
         
        </Stack>
      </Container>
      
    </Box>
  );
};

export default AltmoohConcrete;
