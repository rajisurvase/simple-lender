/* eslint-disable import/no-cycle */
import { GetBorrowerListParams } from "../functions/borrower.api";
import { GetAllRecordsParams } from "../functions/record.api";
import { GetAllTransactionParams } from "../functions/transaction.api";

export const baseUrl = process.env.NEXT_APP_BASE_URL;
export const baseUrlApi = `${process.env.NEXT_APP_BASE_URL}/api/`;
export const baseUrlMedia = process.env.NEXT_APP_BASE_URL;

// api doc => https://militarymoves-admin.dedicateddevelopers.us/apidoc

export const endpoints = {
  auth: {
    signup: "auth/signup",
    profileUpdate: "user/profile/update",
    login : "auth/signin"
  },
  cms: {
    about: "aboutpolicy/details"
  },
  borrower : {
    // list : "allBorrowers",
    list: (params : GetBorrowerListParams)=>{
     return `borrowers?page=${params?.page}&size=${params?.size}`
    },
    add : "borrowers",
    delete : (Id : string)=>{
      return `/borrowers/${Id}`
    }
  },
  records : {
    list : (params: GetAllRecordsParams)=>{
      return `/borrowers/${params?.borrowerId}/records?page=${params?.page}&size=${params?.size}`
    },
    add : (borrowerId : string)=>{
      return `borrowers/${borrowerId}/records`
    },
    delete : (params : {borrowerId : string, recordId : string})=>{
      return `borrowers/${params?.borrowerId}/records/${params?.recordId}`
    }
  },
  transaction : {
    list : (params: GetAllTransactionParams)=>{
      return `/records/${params?.recordId}/transactions?page=${params?.page}&size=${params?.size}`
    },
    add : (borrowerId : string)=>{
      return `records/${borrowerId}/transactions`
    },
    delete : (params : {borrowerId : string, recordId : string})=>{
      return `records/${params?.borrowerId}/transactions/${params?.recordId}`
    }
  }
};

