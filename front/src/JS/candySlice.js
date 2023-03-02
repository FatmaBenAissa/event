import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getcandy = createAsyncThunk("candy/get", async (req, res) => {
  try {
    let result = axios.get("http://localhost:5001/candy/");
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const addcandy= createAsyncThunk("candy/add", async (newcandy) => {
  try {
    let result = axios.post("http://localhost:5001/candy/add", newcandy);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const deletecandy = createAsyncThunk("candy/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5001/candy/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const editcandy= createAsyncThunk("candy/edit", async ({ id, edit }) => {
  try {
    let result = axios.put(`http://localhost:5001/candy/${id}`, edit);
    return result;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
 candyList: null,
  status: null,
};

export const candyslice = createSlice({
  name: "candy",
  initialState,
  reducers: {},
  extraReducers: {
    [getcandy.pending]: (state) => {
      state.status = "pending";
    },
    [getcandy.fulfilled]: (state, action) => {
      state.status = "success";
      state.candyList = action.payload.data.candy;
    },
    [getcandy.rejected]: (state) => {
      state.status = "fail";
    },
    [addcandy.pending]: (state) => {
      state.status = "pending";
    },
    [addcandy.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [addcandy.rejected]: (state) => {
      state.status = "fail";
    },
    [deletecandy.pending]: (state) => {
      state.status = "pending";
    },
    [deletecandy.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [deletecandy.rejected]: (state) => {
      state.status = "fail";
    },
    [editcandy.pending]: (state) => {
      state.status = "pending";
    },
    [editcandy.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [editcandy.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default candyslice.reducer;
