import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { GetEmployees, UpdateEmployeeStateParameter } from "./types";
import { Employee } from "../../../models/Employee";

const ITEMS_PER_PAGE = import.meta.env.VITE_ITEMS_PER_PAGE;

export const employeesApi = createApi({
  reducerPath: "employees",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_BASE_URL }),
  endpoints: (builder) => ({
    getEmployees: builder.query<
      GetEmployees["response"],
      GetEmployees["request"]
    >({
      query: ({ page }) => `employees?_page=${page}&_limit=${ITEMS_PER_PAGE}`,
      transformResponse: (data: GetEmployees["response"]["data"], meta) => {
        const totalRecordCount =
          Number(meta?.response?.headers.get("X-Total-Count")) || 1;

        return {
          data,
          meta: {
            last_page: Math.round(totalRecordCount / ITEMS_PER_PAGE),
          },
        };
      },
    }),
    updateEmployeeState: builder.mutation<{}, UpdateEmployeeStateParameter>({
      query: ({ id, state }) => ({
        method: "post",
        url: `/employees/${id}`,
        body: {
          state,
        },
        headers: {
          accept: "application/json",
        },
      }),
    }),
  }),
});

export const { useGetEmployeesQuery, useUpdateEmployeeStateMutation } =
  employeesApi;
