import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";

// login logout vs. işlemlerimizi kolay şekilde yapabilmek için ayrı bir dosya oluşturduk.

// !2 burada axios ile userbilgilerini göndererek login işlemimizi gerçekleştiriyoruz. baseUrl'i biçok yerde kullanacağımız için .env dosyasından çağırdık.

const useAuthCalls = () => {
  const navigate = useNavigate();

  const login = async (userInfo) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        userInfo
      );
      console.log(data);
      // hook kullanabilmek için ya bir custom hook içerisinde ya da bir functional component içerisinde kullanılabilir. react komponenti olması için return jsx döndürmesi lazım aynı zamanda react komponentleri büyük harf ile başlar. jsx e ihtiyaç duymadan hook kullanabilmemizi sağlayan yapı için bizimde bir hook oluşturmamız gerekir. Bunun için adını use ile başlatacağız. nasıl yapılıyor- rafce ile bir component oluştur. sonra içerisine login fonksiyonunu ekle. ancak export custom hookta yapılamaz bunun için return içerisinde export işlemi yapıyoruzç
      navigate("/stock");

      toastSuccessNotify("Login is successful");
      console.log(data);
    } catch (error) {
      console.log(error);
      toastErrorNotify("Login is failed");
    }
  };

  const logout = async () => {};
  const register = async () => {};

  return { login, logout, register };
};

export default useAuthCalls;
