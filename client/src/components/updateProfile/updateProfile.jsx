/* eslint-disable react/prop-types */
import Style from "./updateProfile.module.css"
import { useFormik } from "formik"
import { profileUpdateValidate } from "../../helper/validate"
import toast from "react-hot-toast"
import { useUserStore } from "../../store/store"
import { callUpdateProfile } from "../../helper/loginHelper"


const UpdateProfile = (props) => {
    const {setUser}=useUserStore((state)=>state)
    const {id ,setPopup}=props
    const formik=useFormik({
        initialValues:{
            email:"",
            mobile:""
        },
        validateOnBlur:false,
        validateOnChange:false,
        validate:profileUpdateValidate,
        onSubmit:async(values)=>{
            values=await Object.assign(values,{id:id})
            const update=callUpdateProfile(values)

            toast.promise(update,{
                loading:"Updating Profile",
                error:"cant update right now",
                success:"Profile updated success fully"
            })

            update.then((data)=>{
                setUser(data);
                setPopup(false);
            })

            

       

        }
    })
  return (
    <div className={Style.main}>
    <h1>Please complete your profile</h1>
        <form onSubmit={formik.handleSubmit}>
            <input type="email" {...formik.getFieldProps('email')} placeholder="Email" className={Style.inputs} />
            <input type="tel" {...formik.getFieldProps('mobile')} placeholder="Phone Number" className={Style.inputs} />
            <button type="submit">Submit</button>

        </form>
    </div>
  )
}

export default UpdateProfile