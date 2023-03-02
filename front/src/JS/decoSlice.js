import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getdeco = createAsyncThunk("deco/get", async (req, res) => {
  try {
    let result = axios.get("http://localhost:5001/deco/");
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const adddeco= createAsyncThunk("deco/add", async (newdeco) => {
  try {
    let result = axios.post("http://localhost:5001/deco/add", newdeco);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const deletedeco = createAsyncThunk("deco/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5001/deco/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const editdeco = createAsyncThunk("deco/edit", async ({ id, edit }) => {
  try {
    let result = axios.put(`http://localhost:5001/deco/${id}`, edit);
    return result;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  decoList: null,
  status: null,
};

export const decoslice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [getdeco.pending]: (state) => {
      state.status = "pending";
    },
    [getdeco.fulfilled]: (state, action) => {
      state.status = "success";
      state.decoList = action.payload.data.deco;
    },
    [getdeco.rejected]: (state) => {
      state.status = "fail";
    },
    [adddeco.pending]: (state) => {
      state.status = "pending";
    },
    [adddeco.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [adddeco.rejected]: (state) => {
      state.status = "fail";
    },
    [deletedeco.pending]: (state) => {
      state.status = "pending";
    },
    [deletedeco.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [deletedeco.rejected]: (state) => {
      state.status = "fail";
    },
    [editdeco.pending]: (state) => {
      state.status = "pending";
    },
    [editdeco.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [editdeco.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default decoslice.reducer;
