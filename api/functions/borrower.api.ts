// import axios from "axios";
// import axiosInstance from "../axiosInstance";
// import { endpoints } from "../endpoints";
// import { parseCookies } from "nookies";
// import { loginAccessTokenCookieName } from "@/config/constants";
// eslint-disable-next-line import/no-cycle
import { endpoints } from "../endpoints";
import axiosInstance from "../axiosInstance";

  //  const cookies = parseCookies();
  // const accessToken = cookies?.[loginAccessTokenCookieName];


  export type GetBorrowerListParams = {
    page : number,
    size : number
  }
  
 export type borrowerType = {
    id?: number | undefined
    name: string
    email: string
    phone: string
    city: string
    state: string
    country: string
    pincode: string
    address: string
  }

  type GetBorrowerListReponse = {
    borrowers : borrowerType[] | undefined,
    count : number
  }
export const GetBorrowerList = async (params: GetBorrowerListParams) => {
    return axiosInstance.get<GetBorrowerListReponse>(endpoints?.borrower?.list(params))
    ?.then((response) => response?.data)
  };

  export const AddBorrower = async (params : borrowerType)=>{
   return axiosInstance.post(endpoints.borrower.add, params)?.then((res)=>res?.data)
  }

  export const EditBorrowerMutation = async (params : borrowerType)=>{
    return axiosInstance.put(endpoints.borrower.add, params)?.then((res)=>res?.data)
   }

   type DeleteBorrowerMutationParams ={
    id: string
   }
   export const DeleteBorrowerMutation =async (params :DeleteBorrowerMutationParams)=>{
    return axiosInstance.delete(endpoints.borrower.delete(params?.id))?.then((response)=>response?.data)
   }