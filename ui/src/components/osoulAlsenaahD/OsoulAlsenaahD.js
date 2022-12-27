import { Box, CardMedia, Container, Stack, Typography } from "@mui/material";
import React from "react";
import detailsImage from "../../static/image5.jpg";
import postImage from "../../static/OsoulAlsenaah.jpg";
import Rightbar from "../rightbar/Rightbar";


const OsoulAlsenaahD = () => {
  return (
    <Box>


      {/* <CardMedia
              component="img"
              sx={{height: 200,
             width: 230, mt:1, marginLeft: 65}}
              image={postImage}
              alt="green iguana"
            /> */}


            <Box
        sx={{
          backgroundImage: `url(${postImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "300px",
          height: 200,
          width: 230,
          mt:1,
          marginLeft: 66
             
        }}
      >
        
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
                شركة مصنع أصول الصناعة للتصنيع
مصنع أصول الصناعة للتصنيع، إحدى مجموعة شركة خيول نجد القابضة، هو مصنع وطني تأسس ليكون داعم للاقتصاد الوطني ومواكب لرؤية المملكة 2030.
 تأسس في مدينة سدير للصناعة الأعمال في العام 2015م، ويصنَع الإكسسورات للكوابل الكهربائية. 
مصنع أصول الصناعة حاصل على شهادة الجودة آيزو 9001 وشهادة السلامة والصحة المهنية آيزو 45001.


            </Typography>
            {/* <Typography align="center" variant="h4" mt={2}>
            رؤية
              
            </Typography>

            <Typography
              m={4}
              color={"gray"}
              variant="body1"
              sx={{ fontWeight: 900 }}
              align="center"
            >
              التميز في تنوع الاستثمار
            </Typography>
            <Typography align="center" variant="h4" mt={2}>
            الرسالة
              
            </Typography>
            <Typography
              m={4}
              color={"gray"}
              variant="body1"
              sx={{ fontWeight: 900 }}
              align="center"
            >
            استخدام أحدث نظريات وطرق الاستثمار لتنويع وتعزيز مصادر الإيرادات في بيئة عمل جاذبة.
 
            </Typography> */}
          </Box>
          <Box flex={1}>
            <Rightbar />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default OsoulAlsenaahD;
