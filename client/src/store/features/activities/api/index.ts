import customFetchBaseQuery from "@/store/api/customBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

export const activitiesApi = createApi({
  baseQuery: customFetchBaseQuery,
  reducerPath: "activitiesApi",
  tagTypes: ["Activity"],
  endpoints: (builder) => ({
    getActivities: builder.query({
      query: () => `/activities`,
      providesTags: ["Activity"],
    }),
  }),
});

export const { useGetActivitiesQuery, useLazyGetActivitiesQuery } =
  activitiesApi;
