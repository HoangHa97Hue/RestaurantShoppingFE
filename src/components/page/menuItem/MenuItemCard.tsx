import { AddShoppingCart, MoreVert, StarBorder } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Fab,
  Grid,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { menuItemModel } from "../../../interfaces";
import "../../../css/menuItemCard.css";
import { Link } from "react-router-dom";
import { useUpdateShoppingCartByUserIdMutation } from "../../../apis/shoppingCartAPI";
import { MiniLoader } from "../../common";
interface Props {
  menuItem: menuItemModel;
}

function MenuItemCard(props: Props) {
  const [isAddingShoppingCart, setIsAddingShoppingCart] =
    useState<boolean>(false);
  const stringAvatar = (name: string) => {
    // console.log('sd' + name);
    return {
      //     // children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  };

  const StyleIconButton = styled(IconButton)({
    gap: "20px",
    // flexWrap: 'wrap'
  });

  const [updateShoppingCart] = useUpdateShoppingCartByUserIdMutation();

  const handleClichShoppingCart = async (menuItemID: number) => {
    setIsAddingShoppingCart(true);
    const response = await updateShoppingCart({
      userId: "5f2b6804-4c9d-4820-9f7b-8b20ed8a3734",
      menuItemId: menuItemID,
      quantity: 1,
    });
    // console.log(response);
    setIsAddingShoppingCart(false);
  };

  return (
    <Grid xs={12} sm={5} item>
      <Card sx={{ width: "100%" }}>
        {props.menuItem.specialTag && props.menuItem.specialTag.length > 0 ? (
          <Button
            className="specialTagButton"
            sx={{
              color: "green",

              fontWeight: "700",
              height: "40px",

              backgroundColor: "transparent",
            }}
            variant="contained"
          >
            <StarBorder /> {props.menuItem.specialTag}
          </Button>
        ) : (
          <Button
            sx={{
              height: "40px",
            }}
            disabled
          ></Button>
        )}

        {/* </Button>)} */}
        <CardHeader
          action={
            <StyleIconButton aria-label="settings" onClick={() => handleClichShoppingCart(props.menuItem.id)}>
              {isAddingShoppingCart ? (
                < MiniLoader/>
              ) : (
                <Fab color="primary" aria-label="add">
                  <AddShoppingCart />
                </Fab>
              )}
            </StyleIconButton>
          }
          title={props.menuItem.name}
          subheader={props.menuItem.category}
          subheaderTypographyProps={{ color: "green", fontWeight: "600" }}
          titleTypographyProps={{ fontWeight: "800", fontSize: "900" }}
        />
        <Link
          style={{ textDecoration: "none" }}
          to={`/menuItemDetails/${props.menuItem.id}`}
        >
          <CardMedia
            component="img"
            height="194"
            src={props.menuItem.image}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {props.menuItem.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Typography variant="h4" color="text.secondary">
              ${props.menuItem.price}
            </Typography>
          </CardActions>
        </Link>
      </Card>
    </Grid>
  );
}

export default MenuItemCard;
