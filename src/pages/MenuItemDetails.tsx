import styled from "@emotion/styled";
import { AddCircleOutline, RemoveCircle } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useGetMenuItemByIDQuery } from "../apis/menuItemAPI";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useUpdateShoppingCartByUserIdMutation } from "../apis/shoppingCartAPI";
import { MainLoader, MiniLoader } from "../components/common";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//thang nay bien local state thoi, ko can de len Redux vi can phải reset mỗi khi thằng user vào page menudetail khác, và nó chỉ cần thiết khi submit vào cart trong DB thôi


function MenuItemDetails() {

  const [quantity, setQuantity] = useState(1);

  const [isAddingShoppingCart, setIsAddingShoppingCart] = useState<boolean>(false);

  const StyleGrid = styled(Grid)({
    height: "80vh",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  });

  const { menuItemID } = useParams();

  const { data, isLoading } = useGetMenuItemByIDQuery(menuItemID);
  const [updateShoppingCart] = useUpdateShoppingCartByUserIdMutation();

  const handleClichShoppingCart = async (menuItemID: number) => {
    setIsAddingShoppingCart(true);
    const response = await updateShoppingCart({userId: "5f2b6804-4c9d-4820-9f7b-8b20ed8a3734", menuItemId: menuItemID, quantity: quantity});
    // console.log(response);
    setIsAddingShoppingCart(false);
  }

  // console.log(data);
  const navigate = useNavigate();
  const handleQuantity = (number: number) => {
    var temp = quantity + number;
    if (temp < 0) {
      temp = 0;
    }
    setQuantity(temp);
  };
  return (
    <StyleGrid gap={"40px"} container p={5}>
      {!isLoading ? (
        <>
          {" "}
          <Grid xs={12} sm={6} item>
            <Card sx={{ width: "100%" }}>
              {/* <CardHeader
            title="{props.menuItem.name}"
            subheader="{props.menuItem.category}"
            subheaderTypographyProps={{ color: "green", fontWeight: "600" }}
            titleTypographyProps={{ fontWeight: "800", fontSize: "900" }}
          /> */}
              <Typography variant="h4" color="green" gutterBottom>
                {data.result?.name}
              </Typography>
              <span
                className="badge text-bg-dark pt-2"
                style={{ height: "40px", fontSize: "20px" }}
              >
                {data.result?.specialTag}
              </span>
              {/* <span className="badge text-bg-dark">"props.menuItem.category"</span> */}

              <CardContent>
                <Typography variant="h5" color="black" gutterBottom>
                  {data.result?.description}
                </Typography>
                <Typography variant="h4" color="text.secondary">
                  $ {data.result?.price}
                </Typography>
                <span
                  className="p-2"
                  style={{
                    border: "1px solid #000000",
                    borderRadius: "20px",
                    alignItems: "center",
                    display: "flex",
                    width: "200px",
                    justifyContent: "space-evenly",
                  }}
                >
                  <i onClick={() => handleQuantity(+1)}>
                    {" "}
                    <AddCircleOutline
                      sx={{ height: "50px", width: "50px", cursor: "pointer" }}
                    />
                  </i>

                  <span className="h1 m-0">{quantity}</span>
                  <i onClick={() => handleQuantity(-1)}>
                    <RemoveCircle
                      sx={{ height: "50px", width: "50px", cursor: "pointer" }}
                    />
                  </i>
                </span>
              </CardContent>
              <CardActions disableSpacing>
                <Grid
                  container
                  gap={"50px"}
                  sx={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <Grid item flex={5}>
                    {" "}
                    {isAddingShoppingCart ? (<button disabled className="btn btn-success form-control"
                      ><MiniLoader scale={50}/></button>) : ( <Button
                        sx={{ width: "100%" }}
                        variant="contained"
                        color="success"
                        onClick={() => handleClichShoppingCart(data.result?.id)}
                      >
                        <strong>Add to Cart</strong>
                      </Button>)}
                   
                  </Grid>
                  <Grid item flex={5}>
                    {" "}
                    <Button
                      sx={{ width: "100%" }}
                      variant="outlined"
                      color="info"
                      onClick={() => navigate(-1)}
                    >
                      <strong>Back to Home</strong>
                    </Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
          <Grid
            sx={{ alignItems: "center", display: { xs: "none", sm: "block" } }}
            sm={4}
            item
          >
            <Avatar
              sx={{ height: "460px", width: "460px" }}
              src="https://blobaccounthadvh.blob.core.windows.net/images/spring roll.jpg"
            />
          </Grid>
        </>
      ) : (
        <MainLoader />
      )}
    </StyleGrid>
  );
}

export default MenuItemDetails;
