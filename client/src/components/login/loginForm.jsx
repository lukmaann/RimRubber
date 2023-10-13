import Style from "./form.module.css"


const LoginForm=()=>{
    return <div className={Style.main}>
    <form>
        <input type="text" placeholder="Mobile" className={Style.credentials} />
        <input type="password" placeholder="Password" className={Style.credentials} />
        <button>Login</button>

    </form>

    </div>
}


export default LoginForm