import Style from "./form.module.css";

const SignupForm = () => {
  return (
    <div className={Style.main}>
      <form action="">
        <div className="flex">
          <input
            type="text"
            placeholder="First name"
            className={`${Style.credentials} w-[50%]`}
          />
          <input
            type="text"
            placeholder="Last name"
            className={`${Style.credentials} w-[50%]`}
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          className={`${Style.credentials}`}
        />
        <input
          type="password"
          placeholder="Password"
          className={`${Style.credentials}`}
        />
        
        <input
          type="text"
          placeholder="Mobile"
          className={`${Style.credentials} `}
        />
        <textarea
          name=""
          id=""
          cols="10"
          rows="3"
          placeholder="Address"
          className={`${Style.credentials}`}
        ></textarea>

        <button>Sign UP</button>
      </form>
    </div>
  );
};

export default SignupForm;
