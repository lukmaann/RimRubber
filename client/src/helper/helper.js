import axios from "axios";

axios.defaults.baseURL="http://localhost:3000/api"

export const registerUser=async(values)=>{
    try {
        const {firstname,lastname,mobile,email,password,username}=values;

        const {status}=await axios.post('/register',{firstname,lastname,mobile,username,email,password});
        console.log(status);
    } catch (error) {
        Promise.reject(error)
    }
}