import React from "react";
import cardImage from "../../static/image08.jpg";

import { Typography,Box } from "@mui/material";



import styles from "/Users/ehabhakmi/Desktop/kayoolnajd-webSite/ui/src/Image.module.css";






const Recents = () => {
  return (

<>
<Typography color={"black"} align="center" variant="h3" m={2}>
استثمارتنا العقارية
</Typography>
<Box sx={{width:{xs:"100%",md:"600px",}, padding:"20px", height:"250px"}} className={styles.content}>
  <Box sx={{marginRight:{md:"-70px",xs:"30px"},height:"100%",width:"45%",margin:"auto", display: "inline-block "}}>
  <img  src={cardImage} style={{marginBottom: 179, marginLeft: -18 , width:183}} />
  </Box>

  <div className={styles.right}>
  <Typography
               mt={{xs:"14px",md:"-11px",}}
              color={"black"}
              variant="h6"
              sx={{ fontWeight: 50 ,fontSize:{xs:"12px",md:"17px"}
            
            }}
              align="center"
              

            >
               تمتلك شركة خيول نجد القابضة مجموعة من العقارات الاستثمارية المتوزعة على مناطق المملكة.
ومن أبرز العقارات برج الجربوع، والذي يتوسط أهم الشوارع الرئيسية ويعتبر معلم في مدينة الخبر. كما أن للشركة مجموعة كبيرة من الأصول العقارية السكنية والتجارية.وأيضا بدأت الشركة في الدخول في مجال بناء وإدارة المجمعات التجارية.
            </Typography>
 
  </div>
</Box>
</>

  );
};

export default Recents;
