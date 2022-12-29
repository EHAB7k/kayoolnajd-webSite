import { Box, CardMedia, Container, Stack, Typography } from "@mui/material";
import React from "react";
import postImage from "../../static/AltmoohAljadeed.jpg";

import Categories from "../category/Categories";

const AltmoohAljadeedM = () => {
  return (
   
    <Container>
    <Stack
            
            direction={{ xs: "column"  , sm: "column" }}
            justifyContent="center"
            alignItems="center"
            spacing={2}
    >
      
      
      
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
          قطاع المقاولات إحدى القطاعات الاستثمارية المهمة في المملكة العربية السعودية، وتملك شركة الطموح الجديد للمقاولات خبرة عالية في قطاع المقاولات.
وتتخصص الشركة في مجالات البناء والبنية التحتية، ولديها عقود تنفيذ لمشاريع حكومية وخاصة، من أهمها وزارة النقل ووزارة الشؤون البلدية والقروية والإسكان، والشركة السعودية للكهرباء وشركة الاتصالات السعودية.
        </Typography>
      </Box>
      
    </Stack>
  </Container>

  

  );
};

export default AltmoohAljadeedM;
