// import ApiRequest from "../axiosInstance/request";
import { endpoints } from "../endpoints";
import axiosInstance from "../axiosInstance";
import { BaseApiResponse, userData } from "@/typescript/types/common.type";
import { IFormInput } from "@/typescript/interface/common.interface";
import { ILoginForm, ISignupForm } from "@/schema/auth.schema";


export type signUpMutationResponce = BaseApiResponse & {
  data :  ISignupForm
}
export const signUpMutation = async (body: ISignupForm) => {
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

type EmailVerificationMutationParams = {
  email : string,
  token : string
}

export const emailVerificationMutation = (body :EmailVerificationMutationParams)=>{
  return axiosInstance
  .post<signUpMutationResponce>(endpoints.auth.verify, body)
  ?.then((response) => response?.data)
}

export const signInMutation =async (body: ILoginForm)=>{
  return axiosInstance
  .post<signInMutationResponse>(endpoints.auth.login, body)
  ?.then((response) => response?.data)
}

export const ProfileUpdateMutation = async (body: userData) => {
  return axiosInstance
  .post<signInMutationResponse>(endpoints.auth.login, body)
  ?.then((response) => response?.data)
};
