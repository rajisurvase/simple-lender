import { IFormInput } from "@/interface/common.interface";
import { BaseApiResponse, userData } from "@/types/common.type";
// import ApiRequest from "../axiosInstance/request";
import { endpoints } from "../endpoints";
import axiosInstance from "../axiosInstance";


export type signUpMutationResponce = BaseApiResponse & {
  // message : string
}
export const signUpMutation = async (body: IFormInput) => {
  return axiosInstance
  .post<signUpMutationResponce>(endpoints.auth.signup, body)
  ?.then((response) => response?.data)
};

export type signInMutationResponse = {

    id: string
  username: string
  email: string
  roles: string[]
  accessToken: string
}

export const signInMutation =async (body: IFormInput)=>{
  return axiosInstance
  .post<signInMutationResponse>(endpoints.auth.login, body)
  ?.then((response) => response?.data)
}

export const ProfileUpdateMutation = async (body: userData) => {
  return axiosInstance
  .post<signInMutationResponse>(endpoints.auth.login, body)
  ?.then((response) => response?.data)
};
