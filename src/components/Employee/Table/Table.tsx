import React, { ReactElement } from "react";

import {
  TableContainer,
  Table as MuiTable,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

import EmployeeState from "../State/State";
import { Employee } from "../../../models/Employee";

interface Props {
  employees: Employee[];
}

export default function Table({ employees }: Props): ReactElement {
  return (
    <TableContainer>
      <MuiTable>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>State</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>{`${employee.first_name} ${employee.last_name}`}</TableCell>
              <TableCell>{employee.email}</TableCell>
              <TableCell>
                <EmployeeState employeeState={employee.state} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}
