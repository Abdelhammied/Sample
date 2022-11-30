import React, { ReactElement } from "react";
import Employees from "./components/Employee/Employee";

interface Props {}

export default function App({}: Props): ReactElement {
  return <Employees />;
}
