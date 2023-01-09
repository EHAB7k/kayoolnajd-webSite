

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import React, { useState } from "react";
import {
  AppBar,
  Box,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Stack,
} from "@mui/material";
import {
  
  Menu as MenuIcon,
  Twitter,
  LinkedIn
} from "@mui/icons-material/";



const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState (null);
const open = Boolean(anchorEl);
const handleClick = event => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};

const [anchorEl2, setAnchorEl2] = useState (null);
const open2 = Boolean(anchorEl2);
const handleClick2 = event => {
  setAnchorEl2(event.currentTarget);
};

const handleClose2 = () => {
  setAnchorEl2(null);
};




  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const SocialBox = styled(Box)({
    display: "flex",
    gap: 10,
  });
  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
  });
  const SearchBox = styled(Box)({
    display: "flex",
    gap: 5,
  });
  const MenuItems = [
    { Name:  <Button href="https://kayoolnajd.com/contactForm" variant="text"  sx={{color: 'black'}} >اتصل بنا</Button> } ,
    { ele:  <Button href="https://kayoolnajd.com/category" target= "_blank"  variant="text"  sx={{color: 'black'}} >شركاتنا</Button> },
    { ele1:  <Button href="https://kayoolnajd.com/details" target= "_blank"  variant="text"  sx={{color: 'black'}} >من نحن</Button> },
    { ele2:  <Button href="/" variant="text"  sx={{color: 'black'}} >الرئيسية</Button> } 
  ];
   const [open3, SetOpen] = useState(false);
  return (
    <AppBar position='static' color='transparent'>
    <Toolbar>

    <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
    <img src="assets/images/image5.jpg"  style={{width:"260px",}}  alt=""/>
        </IconButton>
      

      

      <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
        
        
      </Typography>



     
      <Stack sx={{ display: { xs: "none", sm: "none", md: "flex" } }} direction='row' spacing={2} >
        <Button href="/" color='inherit'>الرئيسية</Button>
        <Button href="/category" color='inherit'>شركاتنا</Button>
        <Button href="/details"  color='inherit'>من نحن</Button>
        
        <Button
          color='inherit'
          id='resources-button'
          aria-controls={open ? 'resources-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          endIcon={<KeyboardArrowDownIcon />}
          onClick={handleClick}>
           اتصل بنا
        </Button>

        <Button
          color='inherit'
          id='social-button'
          aria-controls={open2 ? 'social-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open2 ? 'true' : undefined}
          endIcon={<KeyboardArrowDownIcon />}
           onClick={handleClick2}
          >
           حسابات السوشل ميديا
        </Button>

       
      </Stack>


      <Menu
        id='resources-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        MenuListProps={{
          'aria-labelledby': 'resources-button'
        }}>
        <MenuItem onClick={handleClose}><div  > <a style={{float:"right",color:"black"}} href="mailto:info@kayoolnajd.com" target= "_blank"> <span > لاارسال ايميل </span>  </a> </div></MenuItem>
          <MenuItem onClick={handleClose}><div  > <a style={{float:"right",color:"black"}} href="tel:+966114538201" target= "_blank"> <span >للاتصال</span>  </a> </div></MenuItem>
      </Menu>


      <Menu
        id='social-menu'
        anchorEl={anchorEl2}
        open={open2}
        onClose={handleClose2}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        MenuListProps={{
          'aria-labelledby': 'social-button'
        }}>
        <MenuItem onClick={handleClose}><div  > <a style={{float:"right",color:"black"}} href="mailto:info@kayoolnajd.com" target= "_blank"> <span >  لينكد إن<LinkedIn/></span>  </a> </div></MenuItem>
          <MenuItem onClick={handleClose}><div  > <a style={{float:"right",color:"black"}} href="https://twitter.com/kayoolnajd/" target= "_blank"> <span > تويتر<Twitter/></span>  </a> </div></MenuItem>
      </Menu>


      <MenuIcon
            sx={{
              color: "text.secondary",
              display: { xs: "text.secondary", sm: "text.secondary", md: "none" },
            }}
            onClick={() => SetOpen(!open3)}
          />

    </Toolbar>

    <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open3}
        onClose={() => SetOpen(!open3)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box sx={{ width: 350, height: "90vh" }}>
          {MenuItems.map((item) => (
            <MenuItem
              sx={{
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              {item.Name}
              {item.ele}
              {item.ele1}
              {item.ele2}
              
            </MenuItem>
          ))}
        </Box>
      </Menu>

  </AppBar>
  );
};











export default Navbar;
