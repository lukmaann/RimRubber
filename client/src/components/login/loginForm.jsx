import Style from "./form.module.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useFormik } from "formik";
import { useState } from "react";
import { LoginValidate } from "../../helper/validate";
import { loginUser, userExist,googleauth } from "../../helper/loginHelper";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/store";
import toast from "react-hot-toast";

const LoginForm = () => {
  const {setUser}=useUserStore((state)=>state)
  const navigate = useNavigate();

  const [showPass, setShowPass] = useState(false);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validateOnBlur: false,
    validateOnChange: false,
    validate: LoginValidate,
    onSubmit: async (values) => {
      userExist({username:values.username})
        .then(() => {
          toast.error("Username not exists please register");
        })
        .catch(() => {
          const login = loginUser(values);
          toast.promise(login, {
            loading: "logging In",
            error: "Invalid credentials",
            success: "Logged in successfully",
          });
          login.then((data) => {
            setUser(data)
            navigate("/home");
          });
        });
    },
  });
  return (
    <div className={Style.main}>
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <input
          type="text"
          placeholder="Username"
          {...formik.getFieldProps("username")}
          className={Style.credentials}
        />
        <section className="relative h-10 mb-2">
          <input
            type={showPass ? "text" : "password"}
            placeholder="Password"
            {...formik.getFieldProps("password")}
            className={Style.credentials}
          />
          {showPass ? (
            <h1 onClick={() => setShowPass(!showPass)}>
              <VisibilityOffIcon className="absolute right-[7px] top-[7px] " />
            </h1>
          ) : (
            <h1 onClick={() => setShowPass(!showPass)}>
              <VisibilityIcon className="absolute right-[7px] top-[7px]" />
            </h1>
          )}
        </section>

        <button className={`${Style.btn} `} type="submit">
          Login
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

export default LoginForm;
