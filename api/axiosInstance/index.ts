
import axios, { AxiosError, AxiosResponse } from "axios";
import { loginAccessTokenCookieName } from "@/config/constants";
import { baseUrlApi } from "../endpoints";
import { BaseApiResponse } from "@/typescript/types/common.type";
import { parseCookies } from "nookies";

const axiosInstance = axios.create({
  baseURL: baseUrlApi
});

axiosInstance.interceptors.request.use((config) => {
  const cookies = parseCookies();
  const token = cookies?.[loginAccessTokenCookieName];
  // 'Authorization': `Bearer ${this.accessToken}`
  if (token && !!config.headers) {
    // config.headers["x-access-token"] = `${token}`;
    config.headers["Authorization"] = `Bearer ${token}`
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
