import { toast } from "react-hot-toast";

const mobileverify = (error = {}, value) => {
  if (!value.mobile) {
    error.mobile = toast.error("Enter Username");
  } else if (!/^(\+91)?[6-9]\d{9}$/.test(value.mobile)) {
    error.mobile = toast.error("Invalid Mobile Number");
  }
  return error;
};

const passwordverify = (error = {}, value) => {
  if (!value.password) {
    error.password = toast.error("Enter Password");
  } else if (!/^.{6,}$/.test(value.password)) {
    error.password = toast.error("Please Enter Long Password");
    return;
  }
  return error;
};


const emailVerify=(error={},values)=>{
    if(!values.email){
        error=toast.error("Enter email");
    }
    return error
}



// --------------------------------------------------------------------

export const LoginValidate = async (values) => {
  const errors = emailVerify({},values)
  passwordverify(errors, values);
  return errors;
};

export const SignUpValidate=async(values)=>{
    const errors=mobileverify({},values);
    emailVerify(errors,values);
    passwordverify(errors,values);



    return errors

}