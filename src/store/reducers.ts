import { combineReducers } from "redux";

import { employeesApi as employees } from "./api/employees/employees";
import { pageSlice } from "./employee/pageSlice";

export default combineReducers({
  [employees.reducerPath]: employees.reducer,
  [pageSlice.name]: pageSlice.reducer,
});
