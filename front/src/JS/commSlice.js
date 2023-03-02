import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getcomm = createAsyncThunk("comm/get", async (req, res) => {
  try {
    let result = axios.get("http://localhost:5001/comm/");
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const addcomm = createAsyncThunk("comm/add", async (newcomm) => {
  try {
    let result = axios.post("http://localhost:5001/comm/add", newcomm);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const deletecomm = createAsyncThunk("comm/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5001/comm/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const editcomm = createAsyncThunk("comm/edit", async ({ id, edit }) => {
  try {
    let result = axios.put(`http://localhost:5001/comm/${id}`, edit);
    return result;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  commList: null,
  status: null,
};

export const commSlice = createSlice({
  name: "comm",
  initialState,
  reducers: {},
  extraReducers: {
    [getcomm.pending]: (state) => {
      state.status = "pending";
    },
    [getcomm.fulfilled]: (state, action) => {
      state.status = "success";
      state.commList = action.payload.data.Comms;
    },
    [getcomm.rejected]: (state) => {
      state.status = "fail";
    },
    [addcomm.pending]: (state) => {
      state.status = "pending";
    },
    [addcomm.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [addcomm.rejected]: (state) => {
      state.status = "fail";
    },
    [deletecomm.pending]: (state) => {
      state.status = "pending";
    },
    [deletecomm.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [deletecomm.rejected]: (state) => {
      state.status = "fail";
    },
    [editcomm.pending]: (state) => {
      state.status = "pending";
    },
    [editcomm.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [editcomm.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default commSlice.reducer;
