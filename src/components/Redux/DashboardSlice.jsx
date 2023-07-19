import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
  theme: "light",
  dataSource: [
    // {
    //   Date: new Date(),
    //   Price: 11,
    //   Quantity: 23,
    //   Name: "shan",
    //   Amount: 100,
    //   Status: "Pending",
    // },
    // {
    //   Date: new Date(),
    //   Price: 110,
    //   Quantity: 23,
    //   Name: "haider",
    //   Amount: 500,
    //   Status: "Pending",
    // },
    // {
    //   Date: new Date(),
    //   Price: 1100,
    //   Quantity: 23,
    //   Name: "wahab",
    //   Amount: 400,
    //   Status: "Pending",
    // },
    // {
    //   Date: new Date(),
    //   Price: 11,
    //   Quantity: 23,
    //   Name: "farhan",
    //   Amount: 1010,
    //   Status: "Pending",
    // },
    // {
    //   Date: new Date(),
    //   Price: 160,
    //   Quantity: 23,
    //   Name: "shoaib",
    //   Amount: 2300,
    //   Status: "Pending",
    // },
    // {
    //   Date: new Date(),
    //   Price: 200,
    //   Quantity: 23,
    //   Name: "bilal",
    //   Amount: 3000,
    //   Status: "Pending",
    // },
    // {
    //   Date: new Date(),
    //   Price: 140,
    //   Quantity: 23,
    //   Amount: 230,
    //   Name: "ali",
    //   Status: "Pending",
    // },
  ],
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    updateDataSource: (state, action) => {
      state.dataSource = action.payload;
    },
    toggleTheme: (state, action) => {
      console.log("Asdsad");
    },
  },
});

export const { updateDataSource, toggleTheme } = dashboardSlice.actions;
export default dashboardSlice.reducer;
