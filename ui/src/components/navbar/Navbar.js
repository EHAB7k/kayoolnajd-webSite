import React, { useState } from "react";
import {
  AppBar,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  Menu as MenuIcon,
  Twitter,
  LinkedIn
} from "@mui/icons-material/";

const Navbar = () => {
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
    { Name: "اتصل بنا", Link: "#" },
    { Name: "شركاتنا", Link: "#" },
    { Name: "من نحن", Link: "#" },
    { Name: "الرئيسية", Link: "#" },
  ];
  const [open, SetOpen] = useState(false);
  return (
    <AppBar sx={{ background: "white",
    color: 'black' ,
    
    }} position={"static"}>
      <StyledToolbar>
        <SocialBox>
            <Button href="https://www.linkedin.com/company/kayool-najd-holding-co" target= "_blank"  variant="text"  sx={{color: 'black'}} > <LinkedIn /> </Button>
            <Button href="https://www.youtube.com/" target= "_blank" variant="text" sx={{color: 'black'}} > <Facebook /> </Button>
            <Button href="https://twitter.com/kayoolnajd/" target= "_blank" variant="text" sx={{color: 'black'}} > <Twitter /> </Button>
        </SocialBox>
        
        <MenuBox sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
          {MenuItems.map((item) => (
            <Typography
              sx={{
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              {item.Name}
            </Typography>
          ))}
        </MenuBox>

        <SearchBox>
          <InputBase  sx={{ color: "" }} />
          <MenuIcon
            sx={{
              color: "text.secondary",
              display: { xs: "text.secondary", sm: "text.secondary", md: "none" },
            }}
            onClick={() => SetOpen(!open)}
          />
        </SearchBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => SetOpen(!open)}
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
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
