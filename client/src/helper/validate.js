import { toast } from "react-hot-toast";


const mobileverify = (error = {}, value) => {
  if (!value.mobile) {
    error.mobile = toast.error("Enter Mobile number");
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

const emailVerify = (error = {}, values) => {
  if (!values.email) {
    error = toast.error("Enter email");
  }
  return error;
};

const usernameVerify = async (error = {}, value) => {
  if (!value.username) {
    error.username = toast.error("Username required");
  }


  
  
  return error;
};

const namesVerify = (error = {}, value) => {
  if (!value.firstName || !value.lastName) {
    error.name = toast.error("Full name required");
  }
  return error;
};

// --------------------------------------------------------------------

export const LoginValidate = async (values) => {
  const errors = usernameVerify({}, values);
  passwordverify(errors, values);
  return errors;
};

export const SignUpValidate = async (values) => {
  const errors = mobileverify({}, values);
  emailVerify(errors, values);
  passwordverify(errors, values);
  usernameVerify(errors, values);
  namesVerify(errors, values);

  return errors;
};


 const tyreSizeVerify=(error={},value)=>{
  if(!value.width||!value.profile){
   return error.tyreSize=toast.error("Select the tyre Size Please")
  }
}

export const tyreSizevalidate= async(values)=>{

  const error=tyreSizeVerify({},values);
  return error


}

export const profileUpdateValidate=async(values)=>{
  const error=emailVerify({},values);
  mobileverify(error,values);
  return error
}