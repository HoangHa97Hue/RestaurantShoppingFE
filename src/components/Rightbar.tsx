import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Fade,
  Toolbar,
  Typography,
  styled,
  useScrollTrigger,
} from "@mui/material";
import '../css/rightbar.css'
import React from "react";
import Props from "../interfaces/Props";
import ScrollTop from "./uitility/ScrollTop";
import MenuItemOnSellList from "./MenuItemOnSellList";
const StyledToolBar = styled(Toolbar)({
 position: "relative",
  // left: '0px',
  // right: "auto",
  // height: "fit-content"
});
function Rightbar(props: Props) {
  return (
    <Box position={"static"} flex={2} sx={{ display: { xs: "none", sm: "block" }, margin:0 }}>
      <CssBaseline />
      <Box >
          <StyledToolBar id="back-to-top-anchor">
            <Typography className="styleTypography" sx={{fontWeight:"600"}} color={"red"} variant="h4" component="div">
              Meals on SELL!
            </Typography>
          </StyledToolBar>

        {/* <Toolbar  id="back-to-top-anchor" /> */}
        <Container>
          <Box sx={{ my: 2 }}>
            {/* {[...new Array(12)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
              )
              .join("\n")} */}
              <MenuItemOnSellList />
          </Box>
        </Container>
        <ScrollTop {...props} />
      </Box>
    </Box>
  );
}

export default Rightbar;
