// ! redux toolkit için öncelikle store'unu olutşur. Provider ile sarmala, ardından slice ile ne kadar işlem varsa state değişimi için bunlar için reducerlarını tamamla. en son ise useSelector ile ui tarafında dispatch ile reducerları çağırarak state güncellememelerini tamamla.

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
