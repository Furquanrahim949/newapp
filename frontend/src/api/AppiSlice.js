import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: '/users/register',
        method: 'POST',
        body: userData,
      }),
    }),
    addProduct: builder.mutation({
      query: (productData) => ({
        url: '/products/add-product',
        method: 'POST',
        body: productData,
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useAddProductMutation } = apiSlice;
