import { Employee } from "../../../models/Employee";

export type GetEmployees = {
  request: {
    page: number;
  };

  response: {
    data: Employee[];
    meta: {
      last_page: number;
    };
  };
};

export type UpdateEmployeeStateParameter = {
  id: Employee["id"];
  state: Employee["state"];
};
