import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: 'authApi', // Unique key for this API slice
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000/',
    prepareHeaders: (headers, { getState }) => {
      // Add headers if necessary
      const token = getState().auth?.token; // Example: Auth token
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: 'api/login/', // API endpoint for login
        method: 'POST',
        body: credentials,
      }),
    }),
    signup: builder.mutation({
      query: (userData) => ({
        url: 'api/register/', // API endpoint for signup
        method: 'POST',
        body: userData,
      }),
    }),
    otp: builder.mutation({
      query: (userData) => ({
        url: 'api/otp/', // API endpoint for signup
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useOtpMutation } = authApi;
