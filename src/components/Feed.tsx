import { MoreVert } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { MenuItemList } from "./page/menuItem";

function Feed() {
  const StyleBox = styled(Box)({
    display: "flex",
    // flexWrap: 'wrap'
  });

  const StyleGrid = styled(Grid)({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  });
  return (
    <MenuItemList/>
    // <StyleBox flex={4} sx={{ bgcolor: "" }}>
    //   <StyleGrid gap={"40px"} container p={5}>
    //     <Grid xs={12} sm={5} item>
    //       <Card sx={{ width: "100%" }}>
    //         <CardHeader
    //           avatar={
    //             <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
    //               R
    //             </Avatar>
    //           }
    //           action={
    //             <IconButton aria-label="settings">
    //               <MoreVert />
    //             </IconButton>
    //           }
    //           title="Shrimp and Chorizo Paella"
    //           subheader="September 14, 2016"
    //         />
    //         <CardMedia
    //           component="img"
    //           height="194"
    //           image="/static/images/cards/paella.jpg"
    //           alt="Paella dish"
    //         />
    //         <CardContent>
    //           <Typography variant="body2" color="text.secondary">
    //             This impressive paella is a perfect party dish and a fun meal to
    //             cook together with your guests. Add 1 cup of frozen peas along
    //             with the mussels, if you like.
    //           </Typography>
    //         </CardContent>
    //         <CardActions disableSpacing>
    //           <IconButton aria-label="add to favorites"></IconButton>
    //           <IconButton aria-label="share"></IconButton>
    //         </CardActions>
    //       </Card>
    //     </Grid>
    //     <Grid xs={12} sm={5} item>
    //       <Card sx={{ width: "100%" }}>
    //         <CardHeader
    //           avatar={
    //             <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
    //               R
    //             </Avatar>
    //           }
    //           action={
    //             <IconButton aria-label="settings">
    //               <MoreVert />
    //             </IconButton>
    //           }
    //           title="Shrimp and Chorizo Paella"
    //           subheader="September 14, 2016"
    //         />
    //         <CardMedia
    //           component="img"
    //           height="194"
    //           image="/static/images/cards/paella.jpg"
    //           alt="Paella dish"
    //         />
    //         <CardContent>
    //           <Typography variant="body2" color="text.secondary">
    //             This impressive paella is a perfect party dish and a fun meal to
    //             cook together with your guests. Add 1 cup of frozen peas along
    //             with the mussels, if you like.
    //           </Typography>
    //         </CardContent>
    //         <CardActions disableSpacing>
    //           <IconButton aria-label="add to favorites"></IconButton>
    //           <IconButton aria-label="share"></IconButton>
    //         </CardActions>
    //       </Card>
    //     </Grid>
    //     <Grid xs={12} sm={5} item>
    //       <Card sx={{ width: "100%" }}>
    //         <CardHeader
    //           avatar={
    //             <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
    //               R
    //             </Avatar>
    //           }
    //           action={
    //             <IconButton aria-label="settings">
    //               <MoreVert />
    //             </IconButton>
    //           }
    //           title="Shrimp and Chorizo Paella"
    //           subheader="September 14, 2016"
    //         />
    //         <CardMedia
    //           component="img"
    //           height="194"
    //           image="/static/images/cards/paella.jpg"
    //           alt="Paella dish"
    //         />
    //         <CardContent>
    //           <Typography variant="body2" color="text.secondary">
    //             This impressive paella is a perfect party dish and a fun meal to
    //             cook together with your guests. Add 1 cup of frozen peas along
    //             with the mussels, if you like.
    //           </Typography>
    //         </CardContent>
    //         <CardActions disableSpacing>
    //           <IconButton aria-label="add to favorites"></IconButton>
    //           <IconButton aria-label="share"></IconButton>
    //         </CardActions>
    //       </Card>
    //     </Grid>
    //   </StyleGrid>
    // </StyleBox>
  );
}

export default Feed;
