
import axios, { AxiosError, AxiosResponse } from "axios";
import { parseCookies } from "nookies";
import { loginAccessTokenCookieName } from "@/config/constants";
import { BaseApiResponse } from "@/types/common.type";
import { baseUrlApi } from "../endpoints";

const axiosInstance = axios.create({
  baseURL: baseUrlApi
});

axiosInstance.interceptors.request.use((config) => {
  const cookies = parseCookies();
  const token = cookies?.[loginAccessTokenCookieName];
  if (token && !!config.headers) {
    config.headers["x-access-token"] = `${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => {
    return res;
  },
  async (error: AxiosError<BaseApiResponse>) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
