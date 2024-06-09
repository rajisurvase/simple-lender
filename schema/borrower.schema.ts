import { AddBorrower } from '@/api/functions/borrower.api';
import * as Yup from "yup";

export const AddBorrowerSchema = Yup
  .object({
    firstName : Yup.string().required().label("First name"),
    lastName : Yup.string().required().label("Last name"),
    email : Yup.string().email("Invalid email address").required().label("Email"),
    phone: Yup
      .string()
      .required("Phone number is required")
      .matches(/^\d+$/, "Invalid phone number")
      .min(10, "Phone number must be at least 10 digits")
      .max(10, "Phone number must not exceed 10 digits"),
    dob: Yup.string().required().label("Date of birth"),
    address: Yup.string().required().label("Address"),
    country: Yup.string().required().label("Country"),
    city: Yup.string().required().label("City"),
    state: Yup.string().required().label("State"),
    pincode: Yup.string().required().label("Pincode")
  })
  .required();

export type AddEditBorrowerType = Yup.InferType<typeof AddBorrowerSchema>

