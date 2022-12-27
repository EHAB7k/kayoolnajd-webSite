import React from "react";
import cardImage from "../../static/image08.jpg";
import postImage2 from "../../static/image2.jpg";
import postImage1 from "../../static/image1.jpg";
import postImage3 from "../../static/image3.jpg";
import postImage4 from "../../static/image4.jpg";
import { Box, Grid,Stack,Typography } from "@mui/material";
 import Card from "../card/Card";
import { width } from "@mui/system";


import styles from "/Users/ehabhakmi/Desktop/kayoolnajd-webSite/ui/src/Image.module.css";






const Recents = () => {
  return (
//     <Stack
//   direction="row"
//   justifyContent="space-evenly"
//   alignItems="flex-start"
//   spacing={2}
// >
//     <Box  width="50%"style={{backgroundColor:"gray"}}  >
    
//       <img src={cardImage}></img>
      

//       <Box
         
//         >
//           <Box sx={{ background: "white", opacity: "0.8"  }} style={{
            
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}>
            
//           </Box>
//         </Box>
        

//     </Box>
//     </Stack>
<>
<Typography color={"black"} align="center" variant="h3" m={2}>
استثمارتنا العقارية
</Typography>
<div  className={styles.content}>
  <div className={styles.left}>
  <img  src={cardImage} style={{marginBottom: 179, marginLeft: -18 , width:183}} />
  </div>

  <div className={styles.right}>
  <Typography
               mt={-11}
              color={"black"}
              variant="h6"
              sx={{ fontWeight: 50 ,fontSize:17,}}
              align="center"
              

            >
               تمتلك شركة خيول نجد القابضة مجموعة من العقارات الاستثمارية المتوزعة على مناطق المملكة.
ومن أبرز العقارات برج الجربوع، والذي يتوسط أهم الشوارع الرئيسية ويعتبر معلم في مدينة الخبر. كما أن للشركة مجموعة كبيرة من الأصول العقارية السكنية والتجارية.وأيضا بدأت الشركة في الدخول في مجال بناء وإدارة المجمعات التجارية.
            </Typography>
 
  </div>
</div>
</>

  );
};

export default Recents;
