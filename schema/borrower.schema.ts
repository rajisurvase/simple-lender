import { AddBorrower } from '@/api/functions/borrower.api';
import * as Yup from "yup";

export const AddBorrowerSchema = Yup
  .object({
    firstName : Yup.string().trim().required().label("First name"),
    lastName : Yup.string().trim().required().label("Last name"),
    email : Yup.string().trim().email("Invalid email address").required().label("Email"),
    phone: Yup
      .string().trim()
      .required("Phone number is required")
      .matches(/^\d+$/, "Invalid phone number")
      .min(10, "Phone number must be at least 10 digits")
      .max(10, "Phone number must not exceed 10 digits"),
    dob: Yup.date().required().label("Date of birth"),
    address: Yup.string().trim().required().label("Address"),
    country: Yup.string().trim().required().label("Country"),
    city: Yup.string().trim().required().label("City"),
    state: Yup.string().trim().required().label("State"),
    pincode: Yup.string().trim().required().label("Pincode")
  })
  .required();

export type AddEditBorrowerType = Yup.InferType<typeof AddBorrowerSchema>

