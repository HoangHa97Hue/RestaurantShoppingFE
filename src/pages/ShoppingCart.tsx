import { Add, Margin, Remove, Send } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonProps,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { purple, red } from "@mui/material/colors";
import React from "react";
import { useSelector } from "react-redux";
import { cartItemModel, menuItemModel } from "../interfaces";
import { RootState } from "../storage/redux/store";
import { useUpdateShoppingCartByUserIdMutation } from "../apis/shoppingCartAPI";
import { CartPickUpDetails } from "../components/page/Cart";
const StyleGrid = styled(Grid)({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  // alignItems:"center",
  mt: 3,
});

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]),
  backgroundColor: red[500],
  "&:hover": {
    backgroundColor: red[700],
  },
}));

function ShoppingCart() {
  const cartItems: cartItemModel[] = useSelector(
    (state: RootState) => state.shoppingCartStore.cartItems ?? []
  );
  const [updateShoppingCart] = useUpdateShoppingCartByUserIdMutation();
  const handleUpdateButton = (
    number: number,
    cartItem: cartItemModel,
    isRemove: Boolean
  ) => {
    if (isRemove) {
      updateShoppingCart({
        userId: "5f2b6804-4c9d-4820-9f7b-8b20ed8a3734",
        menuItemId: cartItem.menuItem.id,
        quantity: 0,
      });
    } else {
      updateShoppingCart({
        userId: "5f2b6804-4c9d-4820-9f7b-8b20ed8a3734",
        menuItemId: cartItem.menuItem.id,
        quantity: number,
      });
    }
  };
  // console.log(cartItems)
  return (
    <Grid container>
      <StyleGrid item flex={5} p={"20px"}>
        <div>
          <Typography variant="h3" className="text-success">
            Card summary
          </Typography>
        </div>
        <Grid
          container
          sx={{ justifyContent: "center", width: "100%", marginTop: "15px" }}
        >
          {cartItems.map((cartItem: cartItemModel, index: number) => (
            <Grid key={index} item sx={{ width: "600px" }}>
              <Card sx={{ display: "flex", height: "140px", margin: "10px" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    flexBasis: "100px",
                    flexGrow: 3,
                  }}
                >
                  <CardContent sx={{ width: "100%" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography component="span" variant="h5">
                        {cartItem.menuItem.name}
                      </Typography>
                      <Typography
                        component="span"
                        sx={{ fontWeight: "700" }}
                        variant="h5"
                      >
                        $ {cartItem.menuItem.price * cartItem.quantity}
                      </Typography>
                    </div>

                    <Typography
                      variant="subtitle1"
                      color="red"
                      component="div"
                      sx={{ fontWeight: "700" }}
                    >
                      ${cartItem.menuItem.price}
                    </Typography>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100px",
                          height: "50px",
                          marginTop: "20px",
                        }}
                      >
                        <button
                          style={{
                            padding: "0px",
                            height: "30px",
                            width: "30px",
                            border: "none",
                          }}
                          onClick={() => handleUpdateButton(1, cartItem, false)}
                        >
                          <Add
                            sx={{
                              height: "30px",
                              width: "30px",
                              backgroundColor: "#5c5a60",
                              borderRadius: "10px",
                              cursor: "pointer",
                            }}
                          />
                        </button>
                        <Typography
                          variant="subtitle1"
                          color="#5f5669"
                          component="span"
                          sx={{ fontWeight: "350" }}
                        >
                          {cartItem.quantity}
                        </Typography>
                        <button
                          style={{
                            padding: "0px",
                            height: "30px",
                            width: "30px",
                            border: "none",
                          }}
                          onClick={() =>
                            handleUpdateButton(-1, cartItem, false)
                          }
                        >
                          <Remove
                            sx={{
                              height: "30px",
                              width: "30px",
                              backgroundColor: "#5c5a60",
                              borderRadius: "10px",
                              cursor: "pointer",
                            }}
                          />
                        </button>
                      </div>
                      <ColorButton
                        style={{ height: "50px", fontWeight: "500px" }}
                        onClick={() => handleUpdateButton(0, cartItem, true)}
                      >
                        Remove
                      </ColorButton>
                    </div>
                  </CardContent>
                </Box>
                <CardMedia
                  //  width={"100px"}
                  component="img"
                  sx={{ width: 151, flexBasis: "100px", flexGrow: 1 }}
                  image={cartItem.menuItem.image}
                  // alt="Live from space album cover"
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </StyleGrid>
      <CartPickUpDetails />
    </Grid>
  );
}

export default ShoppingCart;
