import { IFormInput } from "@/interface/common.interface";
import { userData } from "@/types/common.type";
import ApiRequest from "../axiosInstance/request";
import { endpoints } from "../endpoints";

export const signUpMutation = async (body: IFormInput) => {
  try {
    const res = await ApiRequest.post(endpoints.auth.signup, body);

    return res;
  } catch (error) {
    return error;
  }
};

export const ProfileUpdateMutation = async (body: userData) => {
  try {
    const res = await ApiRequest.post(endpoints.auth.profileUpdate, body);

    return res;
  } catch (error) {
    return error;
  }
};
