
import React from "react";
import { Box, Stack, Typography, styled,Button,Link,} from "@mui/material";
import { Facebook,Twitter,LinkedIn} from "@mui/icons-material/";

const SocialBox = styled(Box)({
  display: "flex",
  gap: 11,
  color: 'text.secondary' ,
});


const Footer = () => {
  return (
    <React.Fragment>
      
      <section  className="info_section layout_padding2">
        
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="info-logo">
            <a href="">
              <img src="assets/images/image5.jpg"  style={{width:"260px",}}  alt=""/>
            </a>
            <Typography
              m={1}
              color={"white"}
              variant="h6"
              sx={{ fontWeight: 22,fontSize:11 }}
              align="center"
            >
             شركة خيول نجد القابضة إحدى الشركات الوطنية الحديثة، والتي تأسست لتكون إحدى الشركات الداعمة للقطاع الاقتصادي في المملكة العربية السعودية وتواكب رؤية المملكة 2030.
             تؤمن شركة خيول نجد القابضة بتنوع الاستثمار، لذلك فإنها تملك عدة شركات في قطاعات مختلفة وتديرها بكفاءة، كما تسعى لتحقيق النمو المستمر من خلال خلق بيئة عمل منتجة وجاذبة للكفاءات البشرية.

            </Typography>
          </div>
        </div>



        <div  className="col-lg-2 col-md-3 offset-lg-1">
          <div className="info-nav">
            <h4 align={"center"}>
            التنقل
            </h4>

            <ul >

                   <Link
                   href="http://localhost:3000/"
                   sx={{ textDecoration: "none" }}
                >
                  <li style={{textAlign:"center",direction:"rtl"}}  className="active">
                  الرئيسية
                </li>
               </Link>

              

              <Link
                   href="http://localhost:3000/details"
                   sx={{ textDecoration: "none" }}
                >
               <li style={{textAlign:"center"}}  >من نحن</li>
               </Link>

              <li style={{textAlign:"center"}}  >
                <a href="http://localhost:3000/contactForm">
                  تواصل معانا
                </a>
              </li>
             
            </ul>
          </div>
        </div>

          {/* end */}
        
        <div className="col-md-3">

          <div className="info-contact">
            <h4 align={"right"} >
            معلومات الاتصال 
            </h4>

            <div>
              <h6 align={"right"} >
                موقع الشركة
              </h6>
             
               
              <div  > <a style={{float:"right"}} href="https://maps.app.goo.gl/Tcy7gXKMSdWEYhQv8?g_st=ic" target= "_blank"> <span > الرياض حي الياسمين</span>  </a> </div>
              <br/>
            </div>

            <br/>
            {/* end */}



            <div align={"right"} >

              <h6 align={"right"}>
               خدمة العملاء
              </h6>
    
            <div  > <a style={{float:"right"}} href="mailto:info@kayoolnajd.com" target= "_blank"> <span > info@kayoolnajd.com</span>  </a> </div>
            <div  > <a style={{float:"right"}} href="tel:+966114538201" target= "_blank"> <span > +966114538201</span>  </a> </div>

            </div>
            {/* end */}

            


          </div>
        </div>
        
        <div className=" offset-lg-1">
        <Stack
        
                 direction={{ xs: "column"  , sm: "column" }}
                justifyContent={{ xs: "center"  , sm: "center" }}
                 alignItems={{ xs: "center"  , sm: "center" }}
                 margin={{xs: "100px"  , sm: "auto"}}
                 mt={{xs: "0px" }}
                 spacing={0}
            >
            <h4>
             حسابات التواصل 
            </h4>
            
            <div>
            <SocialBox  >
            <div > <a   href="https://www.linkedin.com/company/kayool-najd-holding-co"> <span > <LinkedIn />  </span>  </a> </div>
            <div > <a  href="https://www.linkedin.com/company/kayool-najd-holding-co"> <span > <Facebook />  </span>  </a> </div>
            <div > <a  href="https://twitter.com/kayoolnajd/"> <span > <Twitter /> </span>  </a> </div>
        </SocialBox>

            </div>
          </Stack>
        </div>
        {/* end */}
        
      </div>
      
      
    </div>
  </section>
    {/* end */}


  <section className="container-fluid footer_section">
    
    <p>
      &copy; 2022 All Rights Reserved By
      <a href="https://html.design/">Develope Ehab Hakami</a>
    </p>
    
  </section>
  {/* end */}
    </React.Fragment>


     
   );
 };

export default Footer;
