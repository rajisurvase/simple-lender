// eslint-disable-next-line import/no-cycle
import axiosInstance from "../axiosInstance"
import { endpoints } from "../endpoints"
import { borrowerType } from "./borrower.api"


export type RecordType = {
    borrower_id : string,
    borrower_name : string,
    principle_amount : string,
    roi : string,
    purchase_date : string,
    due_date : string,
    status : string,
    id : string
}

export const AddRecord = async (param  : RecordType)=>{
    return axiosInstance.post(endpoints.records.add(param?.borrower_id as string), param)?.then((res)=>res?.data)
}

export type IRecord = {
    id : string,
    borrowerName : string, 
    principleAmount : string,
    roi : string,
    purchaseDate : string,
    dueDate : string,
    status : string,
    borrower : borrowerType
}

export type GetAllRecordsResponse = {
    records : IRecord[],
    count : string
}

export type GetAllRecordsParams = {borrowerId : string, page : number, size : number}
export const GetAllRecords = async (params  :GetAllRecordsParams )=>{
    return axiosInstance.get<GetAllRecordsResponse>(endpoints?.records?.list(params))?.then((res)=>res?.data)
}


export const EditRecordMutation = async (params : RecordType)=>{
    return axiosInstance.put(endpoints.records.add(params?.borrower_id as string), params)?.then((res)=>res?.data)
   }