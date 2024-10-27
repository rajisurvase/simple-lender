
import axios, { AxiosError, AxiosResponse } from "axios";
import { loginAccessTokenCookieName } from "@/config/constants";
import { baseUrlApi, sucessNotificationEndPoints } from "../endpoints";
import { BaseApiResponse } from "@/typescript/types/common.type";
import { parseCookies } from "nookies";
import { globalCatchError, globalCatchSucess, globalCatchWarning } from "@/lib/_helper";

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
    const url = res.config.url as string
    if (sucessNotificationEndPoints?.includes(url)) {
      if (res?.status !== 200) {
        globalCatchWarning(res);
      } else {
        globalCatchSucess(res);
      }
    }

    return res;  },
  async (error: AxiosError<BaseApiResponse>) => {
    globalCatchError(error);

    return Promise.reject(error);
  }
);

export default axiosInstance;
