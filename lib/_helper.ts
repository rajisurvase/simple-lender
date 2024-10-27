import events from "@/json/events/events";
import eventEmitter from "@/services/event.emitter";
import { BaseApiResponse } from "@/typescript/types/common.type";
import { AxiosError, AxiosResponse } from "axios";
import { setCookie } from "nookies";

export const globalCatchSucess = (
    response: AxiosResponse<BaseApiResponse>
  ) => {
    let message = "Something went wrong";
    if (response?.data?.message) {
      message = response?.data.message;
    }
    eventEmitter.emit(events.showNotification, {
      message,
      options: { variant: "success" }
    });
  };
  
  export const globalCatchWarning = (
    response: AxiosResponse<BaseApiResponse>
  ) => {
    let message = "Something went wrong";
    if (response?.data?.message) {
      message = response?.data.message;
    }
  
    eventEmitter.emit(events.showNotification, {
      message,
      options: { variant: "warning" }
    });
  };
  
  export const globalCatchError = (error: AxiosError<BaseApiResponse>) => {
    let message = "Something went wrong";
    if (error.response?.data?.message) {
      message = error.response?.data.message;
    }
    eventEmitter.emit(events.showNotification, {
      message,
      options: { variant: "error" }
    });
  };


  export function setCookieClient(key: string, value: string) {
    setCookie(null, key, value, {
      path: "/"
    });
  }
  