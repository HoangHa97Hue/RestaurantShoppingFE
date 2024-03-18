import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shoppingCartApi = createApi({
  reducerPath: "shoppingCartApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7097/api/" }),
  tagTypes:["ShoppingCart"],
  endpoints: (builder) => ({
    getShoppingCartByUserId: builder.query({
        query: (id) => ({
            url: "ShoppingCart",
            params:{
              userID: id
            }
        }),
        providesTags:["ShoppingCart"]
    }),
    updateShoppingCartByUserId: builder.mutation({
        query: ({userId,menuItemId,quantity}) => ({
            url:"ShoppingCart",
            method:"POST",
            params:{userId,menuItemId, quantity}
        }),
        invalidatesTags: ["ShoppingCart"],
    }),
  }),
});

export const {useGetShoppingCartByUserIdQuery,useUpdateShoppingCartByUserIdMutation} = shoppingCartApi