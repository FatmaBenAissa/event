import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getlocation = createAsyncThunk("location/get", async (req, res) => {
  try {
    let result = axios.get("http://localhost:5001/location/");
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const addlocation = createAsyncThunk("product/add", async (newlocation) => {
  try {
    let result = axios.post("http://localhost:5001/location/add", newlocation);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const deletelocation = createAsyncThunk("location/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5001/location/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const editlocation = createAsyncThunk("location/edit", async ({ id, edit }) => {
  try {
    let result = axios.put(`http://localhost:5001/location/${id}`, edit);
    return result;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  locationList: null,
  status: null,
};

export const locationslice = createSlice({
  name: "location",
  initialState,
  reducers: {},
  extraReducers: {
    [getlocation.pending]: (state) => {
      state.status = "pending";
    },
    [getlocation.fulfilled]: (state, action) => {
      state.status = "success";
      state.locationList = action.payload.data.location;
    },
    [getlocation.rejected]: (state) => {
      state.status = "fail";
    },
    [addlocation.pending]: (state) => {
      state.status = "pending";
    },
    [addlocation.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [addlocation.rejected]: (state) => {
      state.status = "fail";
    },
    [deletelocation.pending]: (state) => {
      state.status = "pending";
    },
    [deletelocation.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [deletelocation.rejected]: (state) => {
      state.status = "fail";
    },
    [editlocation.pending]: (state) => {
      state.status = "pending";
    },
    [editlocation.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [editlocation.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default locationslice.reducer;
