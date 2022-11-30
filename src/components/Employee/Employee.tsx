import React, { ReactElement } from "react";

import {
  Backdrop,
  CircularProgress,
  Container,
  Typography,
  Pagination,
  Box,
  Stack,
} from "@mui/material/";

import EmployeesTable from "./Table/Table";
import { useGetEmployeesQuery } from "../../store/api/employees/employees";

interface Props {}

export default function Index({}: Props): ReactElement {
  const [page, setPage] = React.useState<number>(1);

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

  if (isLoading || isFetching) {
    return (
      <Backdrop open>
        <CircularProgress />
      </Backdrop>
    );
  }

  if (!data || isError) {
    return (
      <Typography>
        Something went wrong please make sure to follow the setup steps.
      </Typography>
    );
  }

  return (
    <Container>
      <EmployeesTable employees={data.data} />

      <Stack marginTop={2} alignItems="center">
        <Pagination
          page={page}
          onChange={(e, newPage) => setPage(newPage)}
          count={data.meta.last_page}
        />
      </Stack>
    </Container>
  );
}
