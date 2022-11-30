import { combineReducers } from "redux";

import { employeesApi as employees } from "./api/employees/employees";

export default combineReducers({
  [employees.reducerPath]: employees.reducer,
});
