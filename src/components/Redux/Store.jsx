import { configureStore } from "@reduxjs/toolkit";
import dataSourceReducer from "./DashboardSlice";

const store = configureStore({
  reducer: {
    dashboard: dataSourceReducer,
  },
});

export default store;
