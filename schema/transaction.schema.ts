import { INTEREST_TYPES } from "@/config/constants";
import * as Yup from "yup";


export const TransactionSchema =  Yup.object({
    borrower_id : Yup.string().trim().required().label("Borrower"),
    principal_amount : Yup.number().required().label("Principle Amount"),
    interest_value : Yup.number().required().label("Interest"),
    frequency  : Yup.string().required().label("Duration"),
    transaction_date : Yup.string(),
    note : Yup.string().trim().required().label("Description"),
    interest_type: Yup.string()
    .oneOf(Object.values(INTEREST_TYPES))
    .required().label("Interest Type")
 })

export type ITransactionSchemaType = Yup.InferType<typeof TransactionSchema>