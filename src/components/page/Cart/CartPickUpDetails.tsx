import styled from "@emotion/styled";
import { Send } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { inputHelper } from "../../helper";
import { cartItemModel } from "../../../interfaces";
import { RootState } from "../../../storage/redux/store";
import { useSelector } from "react-redux";
import { MiniLoader } from "../../common";
const StyleGrid = styled(Grid)({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  mt: 3,
});
function CartPickUpDetails() {
  const initialValue = {
    name: "",
    email: "",
    phone: "",
  };
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState(initialValue);
  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const temptData = inputHelper(e, userInput);
    setUserInput(temptData);
    // console.log(userInput);
  };
  let grandTotal = 0;
  let noOfItem = 0;

  const cartItems: cartItemModel[] = useSelector(
    (state: RootState) => state.shoppingCartStore.cartItems ?? []
  );

  cartItems.map((cartItem: cartItemModel) => {
    noOfItem += cartItem.quantity ?? 0;
    grandTotal += (cartItem.menuItem?.price ?? 0) * (cartItem.quantity ?? 0);
  });

  const handlePlaceOrder = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    /// xu ly place order
    // setIsLoading(false);
  }
  return (
    <StyleGrid item flex={3} pr={"130px"} pt={"20px"}>
      <div style={{ height: "50px" }}>
        <Typography variant="h3" className="text-success">
          User details
        </Typography>
      </div>
      <form onSubmit={handlePlaceOrder} style={{ width: "100%", height: "500px" }}>
        <Typography variant="h6">
          Pickup Name
          <TextField
            value={userInput.name}
            name="name"
            margin="normal"
            fullWidth
            label="Pickup Name"
            onChange={handleInputValue}
            // id="pickup Name"
          />
        </Typography>
        <Typography variant="h6">
          Pickup Email
          <TextField
            value={userInput.email}
            name="email"
            margin="normal"
            fullWidth
            label="Pickup Email"
            onChange={handleInputValue}
            // id="fullWidth"
          />
        </Typography>
        <Typography variant="h6">
          Pickup Phone Number
          <TextField
            value={userInput.phone}
            name="phone"
            margin="normal"
            fullWidth
            label="Pickup Phone Number"
            onChange={handleInputValue}
            // id="fullWidth"
          />
        </Typography>
        <div className="form-group mt-3 ">
          <div className="card p-3" style={{ backgroundColor: "ghostwhite" }}>
            <Typography variant="h6">
              Grand Total: <strong>${grandTotal}</strong>
            </Typography>
            <Typography variant="h6">
              No of Items: <strong>{noOfItem}</strong>
            </Typography>
          </div>
        </div>

          <Button disabled={isLoading}  sx={{ mt: "15px" }} variant="contained" endIcon={<Send />}>
            {isLoading ? <MiniLoader/> : (<Typography variant="h6">Look good? Place Order Now!</Typography>)}
          </Button>
      </form>
    </StyleGrid>
  );
}

export default CartPickUpDetails;
