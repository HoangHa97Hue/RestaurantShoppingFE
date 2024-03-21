import React, { useEffect, useState } from "react";
import { menuItemModel } from "../../../interfaces";
import { Box, Grid, styled } from "@mui/material";
import MenuItemCard from "./MenuItemCard";
import { useGetMenuItemsQuery } from "../../../apis/menuItemAPI";
import { useDispatch, useSelector } from "react-redux";
import { setMenuItems } from "../../../storage/redux/menuItemSlice";
import { MiniLoader } from "../../common";
import { useDebounce } from "../../uitility/UseDebounce";
import { RootState } from "../../../storage/redux/store";

function MenuItemList() {
  const StyleBox = styled(Box)({
    display: "flex",
    // flexWrap: 'wrap'
  });

  const StyleGrid = styled(Grid)({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  });

  // const [search, setSearchData] = useState('');
  // const debounceSearch = useDebounce(search);  // co the tach ra 1 component hien thi search

  // const [menuItems, setMenuItems] = useState<menuItemModel[]>([]);
  // useEffect(() => {
  //   fetch("https://localhost:7097/api/MenuItem")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // console.log(data);
  //       setMenuItems(data.result);
  //     });
  // }, []);

  const { data, isLoading } = useGetMenuItemsQuery(null);
  const distPatch = useDispatch();
  useEffect(() => {
    if (!isLoading) {
      distPatch(setMenuItems(data.result));
    }
  }, [isLoading]);

  const menuItems: menuItemModel[] = useSelector(
    (state: RootState) => state.menuItemsSearchStore.menuItem ?? []
  );

  return (
    <StyleBox flex={4} sx={{ bgcolor: "", padding: 0 }}>
      {isLoading ? (
        <div style={{ top: "15px", right: "15px", position: "absolute" }}>
          {" "}
          <MiniLoader />
        </div>
      ) : (
        <StyleGrid gap={"40px"} container p={5}>
          {/* {menuItems?.map((menuItem, index) => {
              return <MenuItemCard menuItem={menuItem} key={index} />;
            })} */}

          {/* {data.result.length > 0 &&
            data.result.map((menuItem: menuItemModel, index: any) => {
              return <MenuItemCard menuItem={menuItem} key={index} />;
            })} */}
          {menuItems.length === 0
            ? data.result.length > 0 &&
              data.result.map((menuItem: menuItemModel, index: any) => {
                return <MenuItemCard menuItem={menuItem} key={index} />;
              })
            : menuItems.length > 0 &&
              menuItems.map((menuItem: menuItemModel, index: any) => {
                return <MenuItemCard menuItem={menuItem} key={index} />;
              })}
        </StyleGrid>
      )}
    </StyleBox>
  );
}

export default MenuItemList;
