import {
  Brightness3,
  CreditCard,
  ExpandLess,
  ExpandMore,
  Fastfood,
  FavoriteBorder,
  Home,
  Login,
  Logout,
  ManageAccounts,
  Paid,
  StarBorder,
  SupervisorAccount,
} from "@mui/icons-material";
import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React, { useState } from "react";
import { userModel } from "../interfaces";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../storage/redux/store";
import { useNavigate } from "react-router-dom";
import { setUserInformation } from "../storage/redux/userAuthenSlice";

function Sidebar({ mode, setMode }: any) {
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    setOpen(!open);
  };
  const userData: userModel = useSelector(
    (state: RootState) => state.userAuthenStore
  );
  const handleLogIn = () => {
    navigate("/login");
  };
  const handleLogOut = () => {
    dispatch(setUserInformation({ fullName: "", role: "", email: "", id: "" }));
    localStorage.clear();
    navigate("/");
  };
  const handlePaid = () => {
    navigate("/shoppingCart")
  }
  return (
    <Box flex={1} sx={{ bgcolor: "", display: { xs: "none", sm: "block" } }}>
      {" "}
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        {userData.id ? (
          <List>
            {" "}
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <ManageAccounts />
              </ListItemIcon>
              <ListItemText primary="Account" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <Fastfood />
                  </ListItemIcon>
                  <ListItemText primary="Menu Item" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <CreditCard />
                  </ListItemIcon>
                  <ListItemText primary="My Orders" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <SupervisorAccount />
                  </ListItemIcon>
                  <ListItemText primary="All Orders" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <i
                    onClick={handleLogOut}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <ListItemIcon>
                      <Logout />
                    </ListItemIcon>
                    <ListItemText primary="Log Out" />
                  </i>
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        ) : (
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <i
                onClick={handleLogIn}
                style={{ display: "flex", alignItems: "center" }}
              >
                <ListItemIcon>
                  <Login />
                </ListItemIcon>
                <ListItemText primary="Log In" />
              </i>
            </ListItemButton>
          </List>
        )}

        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
          <i
                onClick={handlePaid}
                style={{ display: "flex", alignItems: "center" }}
              >
            <ListItemIcon>
              <Paid />
            </ListItemIcon>
            <ListItemText primary="Paids" />
            </i>
          </ListItemButton>
        </ListItem>
        {userData.id && (
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <FavoriteBorder />
              </ListItemIcon>
              <ListItemText primary="Orders" />
            </ListItemButton>
          </ListItem>
        )}
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <Brightness3 />
            </ListItemIcon>
            <Switch
              onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
            />
            <ListItemText primary="Switch Mode" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

export default Sidebar;
