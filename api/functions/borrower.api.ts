// import axios from "axios";
// import axiosInstance from "../axiosInstance";
// import { endpoints } from "../endpoints";
// import { parseCookies } from "nookies";
// import { loginAccessTokenCookieName } from "@/config/constants";
// eslint-disable-next-line import/no-cycle
import { endpoints } from "../endpoints";
import axiosInstance from "../axiosInstance";
import { AddEditBorrowerType } from "@/schema/borrower.schema";
import { BaseApiPaginationResponseType, BaseApiResponse, BaseApiResponseType } from "@/typescript/types/common.type";

  //  const cookies = parseCookies();
  // const accessToken = cookies?.[loginAccessTokenCookieName];


  export type GetBorrowerListParams = {
    page : number,
    limit : number,
    search? :string
  }
  
 
export const GetBorrowerList = async (params: GetBorrowerListParams) => {
    return axiosInstance.get<BaseApiPaginationResponseType<AddEditBorrowerType>>(endpoints.borrower.add, {
      params
    })
    ?.then((response) => response?.data)
  };

  export const AddBorrower = async (params : AddEditBorrowerType)=>{
   return axiosInstance.post(endpoints.borrower.add, params)?.then((res)=>res?.data)
  }

  export const EditBorrowerMutation = async (params : AddEditBorrowerType)=>{
    return axiosInstance.post(endpoints.borrower.add, params)?.then((res)=>res?.data)
   }

   type DeleteBorrowerMutationParams ={
    id: string
   }
   export const DeleteBorrowerMutation =async (params :DeleteBorrowerMutationParams)=>{
    return axiosInstance.delete(endpoints.borrower.delete(params?.id))?.then((response)=>response?.data)
   }


   export const GetBorrowerDetails = async(params : {borrower_id : string})=>{
    return axiosInstance.get<BaseApiResponseType<AddEditBorrowerType>>(`${endpoints.borrower.add}/${params.borrower_id}`).then((response)=>response.data)
   }