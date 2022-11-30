import React, { ReactElement } from "react";

import {
  Backdrop,
  CircularProgress,
  Container,
  Typography,
  Pagination,
  Box,
  Stack,
  Snackbar,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store.config";

import { updatePage as updatePageAction } from "../../store/employee/pageSlice";
import EmployeesTable from "./Table/Table";
import { useGetEmployeesQuery } from "../../store/api/employees/employees";

interface Props {}

export default function Employee({}: Props): ReactElement {
  const page = useSelector((state: RootState) => state["page"]);
  const dispatch: AppDispatch = useDispatch();

  const updatePage = (page: number) => dispatch(updatePageAction(page));

  const {
    data,
    isLoading,
    isFetching,
    isError,
    refetch: refetchEmployees,
  } = useGetEmployeesQuery({
    page,
  });

  React.useEffect(
    function refetchUseGetEmployeesOnPageChange() {
      refetchEmployees();
    },
    [page]
  );

  if (!data || (isError && !isLoading && !isFetching)) {
    return (
      <Typography>
        Something went wrong please make sure to follow the setup steps.
      </Typography>
    );
  }

  return (
    <Container>
      <EmployeesTable employees={data.data} />

      {data.meta.last_page > 1 && (
        <Stack marginTop={2} alignItems="center">
          <Pagination
            page={page}
            onChange={(e, newPage) => updatePage(newPage)}
            count={data.meta.last_page}
          />
        </Stack>
      )}
    </Container>
  );
}
