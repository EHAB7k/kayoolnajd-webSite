import { Box, CardContent, CardMedia, Link} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ cardImage }) => {
  return (
    <Box>
      <NavLink
        href="/details"
       
      >
        {" "}
        <CardMedia
          component="img"
          alt="green iguana"
          height="100%"
          image={cardImage}
          
        />

        <CardContent>
          
          {/* <Typography gutterBottom variant="h5" align="center" component="div">
            برج الجربوع
          </Typography> */}
          {/* <Typography
            gutterBottom
            variant="body2"
            align="center"
            component="div"
            color="text.secondary"
          >
            
          </Typography> */}
          {/* <Typography variant="h5" align="center" color="text.secondary">
          تمتلك شركة خيول نجد القابضة مجموعة من العقارات الاستثمارية المتوزعة على مناطق المملكة.
ومن أبرز العقارات برج الجربوع، والذي يتوسط أهم الشوارع الرئيسية ويعتبر معلم في مدينة الخبر. كما أن للشركة مجموعة كبيرة من الأصول العقارية السكنية والتجارية.وأيضا بدأت الشركة في الدخول في مجال بناء وإدارة المجمعات التجارية.
          </Typography> */}
        </CardContent>
      </NavLink>
    </Box>
  );
};

export default Card;
