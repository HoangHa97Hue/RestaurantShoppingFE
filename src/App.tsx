import React, { useEffect, useState } from "react";

import {
  Box,
  Fab,
  PaletteMode,
  Stack,
  ThemeProvider,
  createTheme,
} from "@mui/material";

import Props from "./interfaces/Props";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  LoginPage,
  MenuItemDetails,
  NotFound,
  RegisterPage,
  ShoppingCart,
} from "./pages";
import { useGetShoppingCartByUserIdQuery } from "./apis/shoppingCartAPI";
import { useDispatch, useSelector } from "react-redux";
import { setShoppingCart } from "./storage/redux/shoppingCartSlice";
import { userModel } from "./interfaces";
import { RootState } from "./storage/redux/store";
import jwt_decode from "jwt-decode";
import { setUserInformation } from "./storage/redux/userAuthenSlice";

function App(props: Props) {
  const [mode, setMode] = useState<PaletteMode>("light");
  const dispatch = useDispatch();
  const customTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const userData: userModel = useSelector(
    (state: RootState) => state.userAuthenStore
  );
  const { data, isLoading } = useGetShoppingCartByUserIdQuery(userData.id);
  console.log("App page print UserData.id: ");
  console.log(userData.id);
  useEffect(() => {
    if (!isLoading) {
      console.log("data when User log in: ");
      console.log(data);
      dispatch(setShoppingCart(data.result?.cartItems));
    }
    // if(userData.id === ""){
    //   console.log("data when not log in");
    //   console.log(data);
    //   dispatch(setShoppingCart({cartItems: []}))
    // }
    // console.log("UserData in App.tsx: ");
    // console.log(userData);
  }, [data]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const { fullName, role, email, id }: userModel = jwt_decode(token);
      dispatch(setUserInformation({ fullName, role, email, id }));
    }
  }, []);
  //hoac minh co the get token ve decode ra  kiem tra co user ID chua ==> co thi set vao redux
  if (userData.id === "") {
    console.log("data when not log in");
    dispatch(setShoppingCart({ cartItems: [] }));
    console.log(data);
  }
  return (
    <ThemeProvider theme={customTheme}>
      <div className="pb-5">
        <Routes>
          <Route
            path="/"
            element={<Home setMode={setMode} mode={mode} />}
          ></Route>
          <Route path="/shoppingCart" element={<ShoppingCart />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          {/* <Route path="/login" element={<LoginPage />}></Route> */}
          <Route
            path="/menuItemDetails/:menuItemID"
            element={<MenuItemDetails />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
