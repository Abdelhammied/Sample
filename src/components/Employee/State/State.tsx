import React, { ReactElement } from "react";
import { Employee } from "../../../models/Employee";

interface Props {
  employeeState: Employee["state"];
}

export default function State({ employeeState }: Props): ReactElement {
  return <>{employeeState}</>;
}
