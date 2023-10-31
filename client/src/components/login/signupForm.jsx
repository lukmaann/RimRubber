import Style from "./form.module.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useFormik } from "formik";
import { useState } from "react";
import { SignUpValidate } from "../../helper/validate";
import { googleauth, registerUser, userExist } from "../../helper/loginHelper";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      password: "",
    },
    validateOnBlur: false,
    validateOnChange: false,
    validate: SignUpValidate,
    onSubmit: async (value) => {
      userExist({ username: value.username })
        .then(() => {
          toast.error("Username already exists");
        })
        .catch(() => {
          const register = registerUser(value);
          toast.promise(register, {
            loading: "Registering",
            success: "User Registered",
            error: "Failed User Creation",
          });
          register.then(() => {
            navigate("/home");
          });
        });
    },
  });



  return (
    <div className={Style.main}>
      <form action="" onSubmit={formik.handleSubmit} autoComplete="off">
        <div className="flex">
          <input
            type="text"
            placeholder="First name"
            {...formik.getFieldProps("firstName")}
            className={`${Style.credentials} w-[50%] border-r-0`}
            autoComplete="off"
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
        <section className="relative h-10 mb-2">
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

        <button type="submit" className={`${Style.btn}`}>
          Sign UP
        </button>
        <section className="flex h-8 justify-center items-center text-gray-400 ">
        ----------or----------
        </section>
        <button
        onClick={()=>googleauth()}
        type="button"
          className={`${Style.btn} ${Style.gbtn} `}
        >
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/google-logo.png"
            alt="google-logo"
            className="w-[8%] mx-2"
          />
          continue with google
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
