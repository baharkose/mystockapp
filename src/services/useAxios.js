import React from "react";
import { useSelector } from "react-redux";

const useAxios = () => {
  const { token } = useSelector((state) => state.auth);

  const axiosWithToken = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    headers: { Authorization: `Token ${token}` },
  });

  const aixosPublic = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
  });
  return axiosWithToken, aixosPublic;
};

export default useAxios;
