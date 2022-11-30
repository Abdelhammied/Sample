import React, { ReactElement } from "react";

import {
  TableContainer,
  Table,
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

export default function index({ employees }: Props): ReactElement {
  return (
    <TableContainer>
      <Table>
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
      </Table>
    </TableContainer>
  );
}
