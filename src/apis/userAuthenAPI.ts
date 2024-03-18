import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { menuItemModel } from "../interfaces";

export const userAuthenAPI = createApi({
  reducerPath: "userAuthenAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7097/api/" }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (userCredentials) => ({
        url: "auth/login",
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: userCredentials,
      }),
    }),
    registerUser: builder.mutation({
      query: (registerData) => ({
        url: "auth",
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: registerData,
      }),
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = userAuthenAPI;
