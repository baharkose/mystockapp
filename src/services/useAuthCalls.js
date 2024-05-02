import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axiosPublic from "./useAxios";
// tüm reducerlarımız içindeki statelerimizi tetiklemek için öncelikle çağırdık.

import {
  fetchStart,
  fetchFail,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice";

// login logout vs. işlemlerimizi kolay şekilde yapabilmek için ayrı bir dosya oluşturduk.

// !2 burada axios ile userbilgilerini göndererek login işlemimizi gerçekleştiriyoruz. baseUrl'i biçok yerde kullanacağımız için .env dosyasından çağırdık.

const useAuthCalls = () => {
  const navigate = useNavigate();
  const dispacth = useDispatch();

  const login = async (userInfo) => {
    // login işlemi başladı, fetchStart için bir dispatch yayınlıyoruz. Statein değişebilmesi için UI tarafında tetikleyici çalıştırdık.
    dispacth(fetchStart());
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        userInfo
      );

      // login işlemi başarılı ise bir dispatch yayınla, loginSuccess reducerı çalışıısn ve stateler buradaki logic yapısına göre güncellensin. Burada bir payload gönderilmesi gerekli, oda bize apiden  gelen veriler ki global olarak gelen user bilgileri kullanılabilsin
      dispacth(loginSuccess(data));
      console.log(data);
      // hook kullanabilmek için ya bir custom hook içerisinde ya da bir functional component içerisinde kullanılabilir. react komponenti olması için return jsx döndürmesi lazım aynı zamanda react komponentleri büyük harf ile başlar. jsx e ihtiyaç duymadan hook kullanabilmemizi sağlayan yapı için bizimde bir hook oluşturmamız gerekir. Bunun için adını use ile başlatacağız. nasıl yapılıyor- rafce ile bir component oluştur. sonra içerisine login fonksiyonunu ekle. ancak export custom hookta yapılamaz bunun için return içerisinde export işlemi yapıyoruzç
      navigate("/stock");

      // login olduktan sonra verilerimizi kullanabilmek için global statelere aktarmamız gerekiyor bunun için features klasösründe authSlice'ımızı oluşturuyoruz.

      toastSuccessNotify("Login is successful");
      console.log(data);
    } catch (error) {
      console.log(error);
      dispacth(fetchFail());
      toastErrorNotify("Login is failed");
    }
  };

  const logout = async () => {
    dispacth(fetchStart());
    try {
    } catch (error) {}
  };
  const register = async (userInfo) => {
    dispacth(fetchStart());
    try {
      // const { data } = await axiosPublic.post("/users/", userInfo);
      const { data } = await axiosPublic.post("/users", userInfo);
      dispacth(registerSuccess(data));
      navigate("/stock");
    } catch (error) {
      dispacth(fetchFail());
    }
  };

  return { login, logout, register };
};

export default useAuthCalls;
