import ApiRequest from "../axiosInstance/request";
import { endpoints } from "../endpoints";

interface IFormInput {
  email: string;
  password: string;
  fullName: string;
  username: string;
  phone: Number;
  bio: string;
}

export const signUpMutation = async (body: IFormInput) => {
  try {
    const res = await ApiRequest.post(endpoints.auth.signup, body);
    console.log("inereer", res);
    return res;
  } catch (error) {
    console.log("inerr", error);
    return error;
  }
};
