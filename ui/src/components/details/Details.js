import { Box, CardMedia, Container, Stack, Typography } from "@mui/material";
import React from "react";
// import detailsImage from "../../static/image5.jpg";
import postImage from "../../static/image3.jpg";

const Details = () => {
  return (
    <Box>
      {/* <Box
        sx={{
          backgroundImage: `url(${detailsImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "300px",
          
        }}
      >
        
      </Box> */}
      <Container>
        
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 1, sm: 2, md: 8 }}
          mt={8}
        >
          <Box flex={3} sx={{ padding: "18px 100px 100px 100px" }}>
            {/* <Typography
              m={4}
              align="center"
              color={"gray"}
              variant="body1"
              sx={{ fontWeight: 900 }}
            >
            شركة خيول نجد القابضة تسعى لأن تكون الأميز في تنوع الاستثمار، لذا تستثمر الشركة في عدة شركات، وتديرها بكفاءة في مختلف القطاعات الاقتصادية


            </Typography>  */}
            <CardMedia
              component="img"
              height="500px"
              width= "100%"
              image={postImage}
              alt="green iguana"
            />
            <Typography align="center" variant="h4" mt={2}>
              من نحن
            </Typography>
            <Typography
              m={4}
              color={"gray"}
              variant="body1"
              sx={{ fontWeight: 900 }}
              align="center"
            >
             شركة خيول نجد القابضة إحدى الشركات الوطنية الحديثة، والتي تأسست لتكون إحدى الشركات الداعمة للقطاع الاقتصادي في المملكة العربية السعودية وتواكب رؤية المملكة 2030.
             تؤمن شركة خيول نجد القابضة بتنوع الاستثمار، لذلك فإنها تملك عدة شركات في قطاعات مختلفة وتديرها بكفاءة، كما تسعى لتحقيق النمو المستمر من خلال خلق بيئة عمل منتجة وجاذبة للكفاءات البشرية.

            </Typography>
            <Typography align="center" variant="h4" mt={2}>
            الرؤية
              
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
 
            </Typography>
          </Box>
          <Box flex={1}>
            
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Details;
