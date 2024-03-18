import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { menuItemModel } from "../interfaces";

export const menuItemApi = createApi({
  reducerPath: "menuItemApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7097/api/" }),
  tagTypes:['MenuItems'],
  endpoints: (builder) => ({
    getMenuItems: builder.query({
        query: () => ({
            url: "menuItem",
            // method: 'Ge'
        }),
        providesTags: ["MenuItems"],
    }),
    getMenuItemByID: builder.query({
        query: (id) => ({
            url:`menuItem/${id}`
        }),
        providesTags: ["MenuItems"],
    }),
    // postMenuItem: builder.query({
    //     query: (),
    //     invalidatesTags: ["MenuItems"]
    // })
  }),
});

export const {useGetMenuItemsQuery,useGetMenuItemByIDQuery} = menuItemApi