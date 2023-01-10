import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import postImage from "../../static/OsoulAlsenaah.jpg";
import Categories from "../category/Categories";


const OsoulAlsenaahD = () => {
  return (
//     <Box>

//             <Box
//         sx={{
//           backgroundImage: `url(${postImage})`,
//           backgroundPosition: "center",
//           backgroundSize: "cover",
//           height: "300px",
//           height: 200,
//           width: 230,
//           mt:1,
//           marginLeft: 66
             
//         }}
//       >
        
//       </Box>
//       <Container>
        
//         <Stack
//           direction={{ xs: "column", md: "row" }}
//           spacing={{ xs: 1, sm: 2, md: 8 }}
//           mt={0}
//         >
            
//           <Box flex={6} sx={{ padding: "18px 100px 100px 100px" }}>
            
            

            
//             <Typography
//               m={4}
//               color={"gray"}
//               variant="body1"
//               sx={{ fontWeight: 900 }}
//               align="center"
//             >
//                 شركة مصنع أصول الصناعة للتصنيع
// مصنع أصول الصناعة للتصنيع، إحدى مجموعة شركة خيول نجد القابضة، هو مصنع وطني تأسس ليكون داعم للاقتصاد الوطني ومواكب لرؤية المملكة 2030.
//  تأسس في مدينة سدير للصناعة الأعمال في العام 2015م، ويصنَع الإكسسورات للكوابل الكهربائية. 
// مصنع أصول الصناعة حاصل على شهادة الجودة آيزو 9001 وشهادة السلامة والصحة المهنية آيزو 45001.


//             </Typography>
            
//           </Box>
//           <Box flex={1}>
            
//           </Box>
//         </Stack>
//       </Container>
//     </Box>
    
<Container>
<Stack
        
        direction={{ xs: "column"  , sm: "column" }}
        justifyContent="center"
        alignItems="center"
        spacing={1}
>
  
  <Categories/>
  
        <Box
          sx={{
            backgroundImage: `url(${postImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: 200,
            width: 220,
            margin: "auto",
      

          }}
      >

      </Box>   
  <Box sx={{ }}>            
    <Typography
            m={1}
      color={"gray"}
      variant="body1"
      sx={{ fontWeight: 900 }}
      align="center"
      marginBottom={14}
    >
       
                 شركة مصنع أصول الصناعة للتصنيع
 مصنع أصول الصناعة للتصنيع، إحدى مجموعة شركة خيول نجد القابضة، هو مصنع وطني تأسس ليكون داعم للاقتصاد الوطني ومواكب لرؤية المملكة 2030.
  تأسس في مدينة سدير للصناعة الأعمال في العام 2015م، ويصنَع الإكسسورات للكوابل الكهربائية. 
 مصنع أصول الصناعة حاصل على شهادة الجودة آيزو 9001 وشهادة السلامة والصحة المهنية آيزو 45001.

    </Typography>
  </Box>
  
</Stack>
</Container>
    
    
    
    
  );
};

export default OsoulAlsenaahD;
