/* eslint-disable import/no-cycle */
import axiosInstance from "../axiosInstance"
import { endpoints } from "../endpoints"



export type ITransaction = {
    id: number
  dueDate: string
  description: string
  withdrawAmount: string
  depositAmount: string
}
export type GetAllTransactionResponse = {
    transation : ITransaction[],
    count : string
}

export type GetAllTransactionParams = {recordId : string, page : number, size : number}
export const GetAllTransaction = async (params  :GetAllTransactionParams )=>{
    return axiosInstance.get<GetAllTransactionResponse>(endpoints?.transaction?.list(params))?.then((res)=>res?.data)
}
