/* eslint-disable import/no-cycle */
import { ITransactionSchemaType } from "@/schema/transaction.schema"
import axiosInstance from "../axiosInstance"
import { endpoints } from "../endpoints"
import { BaseApiPaginationResponseType } from "@/typescript/types/common.type"
import { ITransactionType } from "@/typescript/types/transcation.type"



export type ITransaction = {
    id: number
  dueDate: string
  description: string
  withdrawAmount: string
  depositAmount: string
}


export type IGetAllTransactionParamsType = {search? : string, page : number, limit : number, borrower_id?: string}
export const GetAllTransaction = async (params  :IGetAllTransactionParamsType)=>{
    return axiosInstance.get<BaseApiPaginationResponseType<ITransactionType>>(endpoints?.transaction?.add, {
        params 
    })?.then((res)=>res?.data)
}


export const AddEditTransaction =async(body : ITransactionSchemaType)=>{
    return axiosInstance.post(endpoints.transaction.add, body)
}