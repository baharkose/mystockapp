// ! redux toolkit için öncelikle store'unu olutşur. Provider ile sarmala, ardından slice ile ne kadar işlem varsa state değişimi için bunlar için reducerlarını tamamla. en son ise useSelector ile ui tarafında dispatch ile reducerları çağırarak state güncellememelerini tamamla.

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
// import axios from "axios";

// // - fetch işlemi için asenkronthunk ile bir fonksiyon yazıyoruz. Dışarıda kullanabilmek için export ediyoruz

// export const login = createAsyncThunk(
//   "login",
//   // - isimsiz bir fecth işlemi
//   async ({ values, navigate }) => {
//     try {
//       const { data } = await axios.post(
//         `${process.env.REACT_APP_BASE_URL}/auth/login`,
//         values
//       );
//       toastSuccessNotify("Login is successful");
//       navigate("/stock");
//     } catch (error) {
//       toastErrorNotify("Login is failed");
//     }
//   }
// );

// export const register = createAsyncThunk(
//   "register",
//   async ({ values, navigate }) => {
//     try {
//       const { data } = await axios.post(
//         `${process.env.REACT_APP_BASE_URL}/users/`,
//         values
//       );
//       toastSuccessNotify("Register is successful");
//       navigate("/stock");
//     } catch (error) {
//       toastErrorNotify("Register is failed");
//     }
//   }
// );

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     user: "",
//     token: "",
//     loading: false,
//     error: false,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(login.pending, (state) => {
//         state.loading = true;
//         state.error = false;
//       })
//       .addCase(login.fulfilled, (state, { payload }) => {
//         state.loading = false;
//         state.user = payload?.user.username;
//         state.token = payload?.token;
//       })
//       .addCase(login.rejected, (state) => {
//         state.loading = false;
//         state.error = true;
//       })
//       .addCase(register.pending, (state) => {
//         state.loading = true;
//         state.error = false;
//       })
//       .addCase(register.fulfilled, (state, { payload }) => {
//         state.loading = false;
//         state.error = false;
//         state.user = payload?.data.username;
//         state.token = payload?.token;
//       })
//       .addCase(register.rejected, (state) => {
//         state.loading = false;
//         state.error = true;
//       });
//   },
// });

// export const {} = authSlice.actions;
// export default authSlice.reducer;

// slice snippet rlislice

import { createSlice } from "@reduxjs/toolkit";

// burada reducerlarımızı (statelerimizin değişmesi için çalışacak logic fonksiyonalrımızı tanımlıyoruz. onlar ui tarafında dispatch komutu ile güncellenecek.)

const initialState = {
  // tutmak istediğimiz bileşenleri burada tanımlıyoruz
  user: "",
  loading: false,
  error: false,
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchStart: (state) => {
      // işlem başladı artık loading: true olmalı
      state.loading = true;
    },
    loginSuccess: (state, { payload }) => {
      // state'ler burada gloabal statelerimiz. reducerlar ise bizim statelerimizi değiştirmemizi sağlayacak olan fonksiyonlarımız.
      state.loading = false;
      //1 apiden gelen userInfo ile gelen username bilgisini payload ile çektik. apide user.username şeklinde erişilebilir halde idi, burayı tamamladıktan sonra

      //2 şimdi global statelerden gelen bilgilere göre yönlendirme işlemini yapabilmek için privaterouter ve useAuthCall'daki verile ile yönlendirme kısımlarını güncelleyelim.
      state.user = payload.user.username;
      state.token = payload.token;
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.user = payload.data.username;
      state.token = payload.token;
    },
    logoutSuccess: (state) => {
      // logouttan olunca tüm statlerimizi sıfırladık.
      state.user = "";
      state.loading = false;
      state.token = "";
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchFail,
  fetchStart,
  loginSuccess,
  registerSuccess,
  logoutSuccess,
} = authSlice.actions;

export default authSlice.reducer;
