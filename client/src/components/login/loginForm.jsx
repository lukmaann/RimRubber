import Style from "./form.module.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useFormik } from "formik";
import { useState } from "react";
import { LoginValidate } from "../../helpers/validate";

const LoginForm = () => {
  const [showPass, setShowPass] = useState(false);
  const formik = useFormik({
    initialValues: {
      mobile: "",
      password: "",
    },
    validateOnBlur: false,
    validateOnChange: false,
    validate:LoginValidate,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <div className={Style.main}>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          placeholder="Mobile"
          {...formik.getFieldProps("mobile")}
          className={Style.credentials}
        />
        <section className="relative">
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

        <button className={`${Style.btn} bg-yellow-400`} type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
