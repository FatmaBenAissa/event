import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getservices = createAsyncThunk("services/get", async (req, res) => {
  try {
    let result = axios.get("http://localhost:5001/services/");
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const addservices= createAsyncThunk("services/add", async (newservices) => {
  try {
    let result = axios.post("http://localhost:5001/services/add", newservices);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const deleteservices = createAsyncThunk("services/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5001/services/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const editservices = createAsyncThunk("services/edit", async ({ id, edit }) => {
  try {
    let result = axios.put(`http://localhost:5001/services/${id}`, edit);
    return result;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  servicesList: null,
  status: null,
};

export const servicesslice = createSlice({
  name: "services",
  initialState,
  reducers: {},
  extraReducers: {
    [getservices.pending]: (state) => {
      state.status = "pending";
    },
    [getservices.fulfilled]: (state, action) => {
      state.status = "success";
      state.servicesList = action.payload.data.Services;
    },
    [getservices.rejected]: (state) => {
      state.status = "fail";
    },
    [addservices.pending]: (state) => {
      state.status = "pending";
    },
    [addservices.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [addservices.rejected]: (state) => {
      state.status = "fail";
    },
    [deleteservices.pending]: (state) => {
      state.status = "pending";
    },
    [deleteservices.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [deleteservices.rejected]: (state) => {
      state.status = "fail";
    },
    [editservices.pending]: (state) => {
      state.status = "pending";
    },
    [editservices.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [editservices.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default servicesslice.reducer;