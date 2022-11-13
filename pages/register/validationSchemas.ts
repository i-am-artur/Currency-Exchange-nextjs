import * as Yup from "yup";
const email = "admin@admin.com";
const password = "admin";

export const loginRequirements = Yup.object({
  email: Yup.mixed()
    .equals([email], `Demo: Must be '${email}'`)
    .required("Required"),
  password: Yup.mixed()
    .equals([password], `Demo: Must be '${password}'`)
    .required("Required"),
});
