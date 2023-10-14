import Style from "./form.module.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useFormik } from "formik";
import { useState } from "react";
import { SignUpValidate } from "../../helpers/validate";
import { registerUser } from "../../helper/helper";
import {toast} from "react-hot-toast"

const SignupForm = () => {
  const [showPass, setShowPass] = useState(false);

  const formik = useFormik({
    initialValues: {
      username:"",
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      password: "",

    },
    validateOnBlur: false,
    validateOnChange: false,
    validate:SignUpValidate,
    onSubmit: async (value) => {
      console.log(value.username);
      const register=registerUser(value)
      toast.promise(register,{
        loading:"Registering",
        success:"User registered",
        error:"cant register"
      })

      register.then((status)=>{
        console.log(status);
      })
    },
  });

  return (
    <div className={Style.main}>
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="flex">
          <input
            type="text"
            placeholder="First name"
            {...formik.getFieldProps("firstName")}
            className={`${Style.credentials} w-[50%] border-r-0`}
          />
          <input
            type="text"
            placeholder="Last name"
            {...formik.getFieldProps("lastName")}
            className={`${Style.credentials} w-[50%] border-l-0`}
          />
        </div>
        <input
          type="text"
          {...formik.getFieldProps("username")}
          placeholder="Username"
          className={`${Style.credentials}`}
        />

        <input
          type="email"
          {...formik.getFieldProps("email")}
          placeholder="Email"
          className={`${Style.credentials}`}
        />
        <section className="relative">
          <input
            type={showPass ? "text" : "password"}
            placeholder="Password"
            {...formik.getFieldProps("password")}
            className={`${Style.credentials}`}
          />
          {showPass ? (
            <h1 onClick={() => setShowPass(!showPass)}>
              <VisibilityOffIcon className="absolute right-[7px] top-[7px]" />
            </h1>
          ) : (
            <h1 onClick={() => setShowPass(!showPass)}>
              <VisibilityIcon className="absolute right-[7px] top-[7px]" />
            </h1>
          )}
        </section>

        <input
          type="text"
          placeholder="Mobile"
          {...formik.getFieldProps("mobile")}
          className={`${Style.credentials} `}
        />
        

        <button type="submit" className={`${Style.btn} bg-yellow-400`}>Sign UP</button>
      </form>
    </div>
  );
};

export default SignupForm;
