import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography, styled } from '@mui/material'
import React from 'react'

function MenuItemOnSellList() {
  const StyleBox = styled(Box)({
    display: 'flex',
    flexDirection:'column',
  });

  return (
    <List
    sx={{
      width: '100%',
      maxWidth: 360,
      bgcolor: 'background.paper',
    }}
  >
    <ListItem sx={{height:'100px', gap:'20px'}}>
      <ListItemAvatar>
        <Avatar  sx={{height:'90px', width:'90px'}}>
          {/* <ImageIcon /> */}
        </Avatar>
      </ListItemAvatar>
      <StyleBox>
      <Typography className="styleTypography" sx={{fontWeight:"600"}} color={"#8A2BE2"} variant="h6" component="div">
              Meals on SELL!
            </Typography>
            <Typography className="styleTypography" sx={{fontWeight:"600"}} color={"#8A2BE2"} variant="h6" component="div">
              Meals on SELL!
            </Typography>
      </StyleBox>    
    </ListItem>
    <Divider variant="inset" component="li" />
    <ListItem sx={{height:'100px', gap:'20px'}}>
      <ListItemAvatar>
        <Avatar  sx={{height:'90px', width:'90px'}}>
          {/* <ImageIcon /> */}
        </Avatar>
      </ListItemAvatar>
      <StyleBox>
      <Typography className="styleTypography" sx={{fontWeight:"600"}} color={"#8A2BE2"} variant="h6" component="div">
              Meals on SELL!
            </Typography>
            <Typography className="styleTypography" sx={{fontWeight:"600"}} color={"#8A2BE2"} variant="h6" component="div">
              Meals on SELL!
            </Typography>
      </StyleBox>    
    </ListItem>
    <Divider variant="inset" component="li" />
    <ListItem sx={{height:'100px', gap:'20px'}}>
      <ListItemAvatar>
        <Avatar  sx={{height:'90px', width:'90px'}}>
          {/* <ImageIcon /> */}
        </Avatar>
      </ListItemAvatar>
      <StyleBox>
      <Typography className="styleTypography" sx={{fontWeight:"600"}} color={"#8A2BE2"} variant="h6" component="div">
              Meals on SELL!
            </Typography>
            <Typography className="styleTypography" sx={{fontWeight:"600"}} color={"#8A2BE2"} variant="h6" component="div">
              Meals on SELL!
            </Typography>
      </StyleBox>    
    </ListItem>
  </List>
  )
}

export default MenuItemOnSellList