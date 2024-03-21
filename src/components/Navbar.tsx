import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { BrunchDining, Mail, Notifications, Restaurant, RestaurantMenu, ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  createTheme
} from "@mui/material";
import React from "react";
import { cartItemModel, menuItemModel, userModel } from "../interfaces";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../storage/redux/store";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "./uitility/UseDebounce";
import { setMenuItemsSearch } from "../storage/redux/menuItemsSearchSlice";



const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const StyledSearch = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "10px",
  width: "40%",
}));

const StylePersonalInfo = styled(Box)(({ theme }) => ({
  display: "none",
  justifyContent: "space-evenly",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const StyleSmallPersonalInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate =useNavigate();
  const userData :userModel = useSelector((state: RootState) => state.userAuthenStore)
  const cartItems :cartItemModel[] = useSelector((state: RootState) => state.shoppingCartStore.cartItems ?? [])
  const distPatch = useDispatch();
 
  const handleClickCart = () => {
    navigate("/shoppingCart");
  }

  const [search, setSearchData] = useState('');
  const debounceSearch = useDebounce(search);  

  const menuItems: menuItemModel[] = useSelector(
    (state: RootState) => state.menuItemStore.menuItem ?? []
  );

  useEffect(() => {
    //get data tu slice len roi filter
    // menuItems.filter(item => item.name === debounceSearch);
    // distPatch(setMenuItemsSearch(menuItems));

    const filteredMenuItems = menuItems.filter(item => item.name.toLowerCase().includes(debounceSearch));
    
    // Dispatch filtered menu items
    distPatch(setMenuItemsSearch(filteredMenuItems));
  }, [debounceSearch])

  console.log("In Navbar component, CartItems length: "+cartItems.length);
  return (
    <AppBar position="static" sx={{ flexGrow: 1 }}>
      <StyledToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Ha's Restaurant <RestaurantMenu/>
        </Typography>
        <BrunchDining sx={{ display: { xs: "block", sm: "none" } }} />
        <StyledSearch>
          {" "}
          <InputBase placeholder="search..." onChange={(e) => setSearchData(e.target.value)}/>
        </StyledSearch>
        <StylePersonalInfo>
        <i style={{cursor:"pointer"}} onClick={handleClickCart}><Badge badgeContent={cartItems.length} color="error">
            <ShoppingCart color="action" />
          </Badge></i>
          
          <Badge badgeContent={2} color="error">
            <Notifications color="action" />
          </Badge>
          <Avatar onClick={(e) => setOpenMenu(true)} sx={{ width: 30, height: 30 }} />
        </StylePersonalInfo>
        <StyleSmallPersonalInfo onClick={(e) => setOpenMenu(true)}>
          <Badge badgeContent={4} color="error">
            <Mail color="action" />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} />
        </StyleSmallPersonalInfo>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={openMenu}
        onClose={(e) => setOpenMenu(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
      </StyledToolBar>
    </AppBar>
  );
}

export default Navbar;
