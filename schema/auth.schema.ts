import * as Yup from "yup";

export const signupValidationSchema = Yup.object({
  firstName: Yup.string().trim().required("First name is required"),
  lastName: Yup.string().trim().required("Last name is required"),
  email: Yup.string().trim()
    .required("Email address is required")
    .email("Invalid email address"),
  phone: Yup.string().trim()
    .required("Phone number is required")
    .matches(/^[0-9]/, "Phone number must be numeric digits")
    .min(10, "Atleast 10 digit is needed")
    .max(10, "Maximum 10 digits are supported"),
  password: Yup.string().trim()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: Yup.string().trim()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password"), ""], "Passwords must match"),
  // acceptTerms: Yup.boolean().oneOf(
  //   [true],
  //   "You must accept the terms and conditions"
  // )
});


export type ISignupForm = Yup.InferType<typeof signupValidationSchema>;

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email address is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
});

export type ILoginForm = Yup.InferType<typeof loginValidationSchema>;

export const resetPasswordValidationSchema = Yup.object({
  password: Yup.string()
    .required("New password is required")
    .min(8, "New password must be at least 8 characters long"),
  confirm_password: Yup.string()
    .required("Password is required")
    .oneOf([Yup.ref("password"), ""], "Passwords must match")
});

export type IResetPassForm = Yup.InferType<
  typeof resetPasswordValidationSchema
>;

export const passwordSchema = Yup.object({
  old_password: Yup.string().required("Old password is required"),
  password: Yup.string()
    .required("New password is required")
    .min(8, "Password must be at least 8 characters long")
    .notOneOf(
      [Yup.ref("old_password"), null],
      "New password must be different from old password"
    ),
  confirm_password: Yup.string()
    .required("Please confirm your new password")
    .oneOf([Yup.ref("password"), ""], "Passwords must match")
});

export type IPasswordForm = Yup.InferType<typeof passwordSchema>;
