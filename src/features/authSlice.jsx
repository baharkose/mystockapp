import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import axios from "axios";

// - fetch işlemi için asenkronthunk ile bir fonksiyon yazıyoruz. Dışarıda kullanabilmek için export ediyoruz

export const login = createAsyncThunk(
  "login",
  // - isimsiz bir fecth işlemi
  async ({ values, navigate }) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        values
      );
      toastSuccessNotify("Login is successful");
      navigate("/stock");
    } catch (error) {
      toastErrorNotify("Login is failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: "",
    token: "",
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload?.user.username;
        state.token = payload?.token;
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
