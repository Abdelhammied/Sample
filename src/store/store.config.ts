import { configureStore } from "@reduxjs/toolkit";
import { employeesApi } from "./api/employees/employees";
import reducers from "./reducers";

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {},
    }).concat([employeesApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
