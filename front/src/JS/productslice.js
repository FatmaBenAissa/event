import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getproduct = createAsyncThunk("product/get", async (req, res) => {
  try {
    let result = axios.get("http://localhost:5001/product/");
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const addproduct = createAsyncThunk("product/add", async (newuser) => {
  try {
    let result = axios.post("http://localhost:5001/product/add", newuser);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const deleteproduct = createAsyncThunk("product/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5001/product/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const editproduct = createAsyncThunk("product/edit", async ({ id, edit }) => {
  try {
    let result = axios.put(`http://localhost:5001/product/${id}`, edit);
    return result;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  productList: null,
  status: null,
};

export const productslice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [getproduct.pending]: (state) => {
      state.status = "pending";
    },
    [getproduct.fulfilled]: (state, action) => {
      state.status = "success";
      state.productList = action.payload.data.product;
    },
    [getproduct.rejected]: (state) => {
      state.status = "fail";
    },
    [addproduct.pending]: (state) => {
      state.status = "pending";
    },
    [addproduct.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [addproduct.rejected]: (state) => {
      state.status = "fail";
    },
    [deleteproduct.pending]: (state) => {
      state.status = "pending";
    },
    [deleteproduct.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [deleteproduct.rejected]: (state) => {
      state.status = "fail";
    },
    [editproduct.pending]: (state) => {
      state.status = "pending";
    },
    [editproduct.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [editproduct.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default productslice.reducer;
