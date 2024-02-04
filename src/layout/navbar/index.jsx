import React from "react";
import style from "./index.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";

// import { Link } from "@mui/material";
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    // <ul>
    //   <li>
    //     <Link to="/">Home</Link>
    //   </li>
    //   <li>
    //     <Link to="/products">Product</Link>
    //   </li>
    // </ul>
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} to="/">
            <img
              src="https://nnccnnm154l10hkm-52485554369.shopifypreview.com/cdn/shop/files/demo-kids-header-logo.svg?v=1698918200"
              alt=""
            />
          </Link>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          ></Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
              {/* <SearchOutlinedIcon /> */}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Shop</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Trending</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Pages</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link
                  to="/products"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Product
                </Link>
              </MenuItem>
            </Menu>
          </Box>

          {/* <Link sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <img
              src="https://nnccnnm154l10hkm-52485554369.shopifypreview.com/cdn/shop/files/demo-kids-header-logo.svg?v=1698918200"
              alt=""
            />
          </Link> */}

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          ></Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            <Button
              // className={style.button}
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "black",
                display: "block",
                fontWeight: "800",
                fontFamily: "Bradley hand,cursive",
              }}
            >
              Shop
            </Button>
            <Button
              className={style.button}
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "black",
                display: "block",
                fontWeight: "800",
                fontFamily: "Bradley hand,cursive",
              }}
            >
              Trending
            </Button>
            <Button
              className={style.button}
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "black",
                display: "block",
                fontWeight: "800",
                fontFamily: "Bradley hand,cursive",
              }}
            >
              Pages
            </Button>
            <Button
              className={style.button}
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "black",
                display: "block",
                fontWeight: "800",
                fontFamily: "Bradley hand,cursive",
              }}
            >
              <Link
                to="/products"
                style={{
                  color: "black",
                  display: "block",
                  fontWeight: "800",
                  fontFamily: "Bradley hand,cursive",
                  textDecoration: "none",
                }}
              >
                Product
              </Link>
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <SearchOutlinedIcon />
                <Link to="/login" style={{ color: "grey" }}>
                  <PersonOutlineIcon />
                </Link>
                <Link to="/wishlist" style={{ color: "grey" }}>
                  <FavoriteBorderIcon />
                </Link>
                <Link style={{ color: "grey" }}>
                  <ShoppingBagOutlinedIcon />
                </Link>
              </IconButton>
            </Tooltip>
            {/* <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Link to="/login">
                  <PersonOutlineIcon />
                </Link>
                <Link to="/wishlist">
                  <FavoriteBorderIcon />
                </Link>

                <ShoppingBagOutlinedIcon />
              </IconButton>
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
