import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
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
  const { axiosPublic, axiosWithToken } = useAxios();
  const navigate = useNavigate();
  const dispacth = useDispatch();

  const login = async (userInfo) => {
    // login işlemi başladı, fetchStart için bir dispatch yayınlıyoruz. Statein değişebilmesi için UI tarafında tetikleyici çalıştırdık.
    dispacth(fetchStart());
    try {
      // const { data } = await axios.post(
      //   `${process.env.REACT_APP_BASE_URL}/auth/login`,
      //   userInfo
      // );

      const { data } = await axiosPublic.post("/auth/login/", userInfo);

      // login işlemi başarılı ise bir dispatch yayınla, loginSuccess reducerı çalışıısn ve stateler buradaki logic yapısına göre güncellensin. Burada bir payload gönderilmesi gerekli, oda bize apiden  gelen veriler ki global olarak gelen user bilgileri kullanılabilsin
      dispacth(loginSuccess(data));

      // hook kullanabilmek için ya bir custom hook içerisinde ya da bir functional component içerisinde kullanılabilir. react komponenti olması için return jsx döndürmesi lazım aynı zamanda react komponentleri büyük harf ile başlar. jsx e ihtiyaç duymadan hook kullanabilmemizi sağlayan yapı için bizimde bir hook oluşturmamız gerekir. Bunun için adını use ile başlatacağız. nasıl yapılıyor- rafce ile bir component oluştur. sonra içerisine login fonksiyonunu ekle. ancak export custom hookta yapılamaz bunun için return içerisinde export işlemi yapıyoruzç

      navigate("/stock");

      // login olduktan sonra verilerimizi kullanabilmek için global statelere aktarmamız gerekiyor bunun için features klasösründe authSlice'ımızı oluşturuyoruz.

      toastSuccessNotify("Login is successful");
    } catch (error) {
      console.log(error);
      dispacth(fetchFail());
      toastErrorNotify("Login is failed ", error);
    }
  };

  const logout = async () => {
    dispacth(fetchStart());
    try {
      //! login işleminden sonra güvenlikli apilerde bize bir token oluşturulur. Bundan sonra yapılacak işlemler için biz bu tokenı kullanarak hareket ederiz. Bu nedenle logout işlemini token kullanarak yapıyoruz. Logout işlemi get ya da post olabilir ancak daha çok post olarak yapılır. Apinin oluşturduğu token bize headers altından ve token başlığı altında gelir o nedenle çağırırken bu kurala uygun olarak get ya da post isteğimizi yazmamız gerekir.
      await axiosWithToken("/auth/logout/");
      toastSuccessNotify("Logout is successful");
      dispacth(logoutSuccess);
      // logout işlemi için statelerimizin silinmesi gerekiyor bunun için action creator fonksiyon ve dispatch yayınlamamız gerekir.
    } catch (error) {}
  };

  const register = async (userInfo) => {
    dispacth(fetchStart());
    try {
      // const { data } = await axiosPublic.post("/users/", userInfo);
      const { data } = await axiosPublic.post("/users/", userInfo);
      dispacth(registerSuccess(data));
      navigate("/stock");
      console.log("registration is successful");
    } catch (error) {
      dispacth(fetchFail());
      console.log("registration is failed");
    }
  };

  return { login, logout, register };
};

export default useAuthCalls;
