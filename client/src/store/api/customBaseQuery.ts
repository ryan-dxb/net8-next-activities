import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";

// The following is a custom baseQueryFn that will automatically add the
// Authorization header to all requests. It also handles errors from the server
// and throws a custom error that can be handled by the RTK Query middleware.

const baseUrl = `http://localhost:5000/api`;

const baseQuery = fetchBaseQuery({
  baseUrl,
  credentials: "include",
  cache: "no-cache",
});

const customFetchBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  return result;
};

export default customFetchBaseQuery;
