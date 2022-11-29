import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Employee } from "../../models/Employee";

type GetEmployeesParameter = {
  page: number;
};

type UpdateEmployeeStateParameter = {
  id: Employee["id"];
  state: Employee["state"];
};

export const employeesApi = createApi({
  reducerPath: "employees",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_BASE_URL }),
  endpoints: (builder) => ({
    getEmployees: builder.query<Employee[], GetEmployeesParameter>({
      query: ({ page }) =>
        `employees?_page=${page}&_limit=${import.meta.env.VITE_ITEMS_PER_PAGE}`,
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
