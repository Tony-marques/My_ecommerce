import { createSlice } from "@reduxjs/toolkit";

export interface AdminSliceInterface {
   admin: {
      isAdmin: boolean;
      isCollapsed: boolean;
   };
}

export const AdminSlice = createSlice({
   name: "admin",
   initialState: {
      isAdmin: localStorage.getItem("admin") || false,
      isCollapsed: false,
   },
   reducers: {
      toggleCollapse: (state, { payload }) => {
         state.isCollapsed = payload;
      },
   },
});

export const { toggleCollapse } = AdminSlice.actions;

export default AdminSlice.reducer;
