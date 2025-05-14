import { IInterestType } from "@/config/constants"

export interface ITransactionType {
     _id: string
  borrower_id: string
  principal_amount: number
  interest_type: IInterestType
  interest_value: number
  frequency: string
  transaction_date: string
  note: string
  adjusted_principal: number
  interest_amount: number
  total_balance: number
  status: string
  borrower_name: string
}