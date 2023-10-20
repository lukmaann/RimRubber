/* eslint-disable no-unused-vars */
import axios from "axios";

axios.defaults.baseURL="http://localhost:3000/api"

// ----------------calls api to check user exists or not --------------------------

export const userExist=async(value)=>{
    try {
        const {username}=value;
        const {status}=await axios.post('/userexist',{username});
        if(status===200){
            Promise.reject(status)
        }
        return Promise.reject(404)
    } catch (error) {
        return Promise.reject(error.message)
    }
}



// ---------------------calls api to register user--------------------------------
export const registerUser= async(values)=>{
    try {
        const {firstName,lastName,email,password,username,mobile}=values;

        const {status,response}=await axios.post("/register",{firstName,lastName,email,mobile,username,password},{withCredentials:true});
     
      

        if(status===201){
            return Promise.resolve(response);
        }else{
            return Promise.reject(response)
        }

        
    } catch (error) {
        return Promise.reject(error.message)
    }
}



// --------------------------calls api to login user--------------------------------
export const loginUser=async(values)=>{
    try {
        const {username,password}=values;

        const {status,data}=await axios.post('/login',{username,password},{withCredentials:true});

        if(status===200){
            return Promise.resolve(data);
        }
        return Promise.reject(data)
    } catch (error) {
        return Promise.reject(error.message)
    }
}



// --------------------------calls api to logout user--------------------------------
export const logoutUser=async()=>{
    try {
        const {status,data}=await axios.get('/logout',{withCredentials:true});
        
        
       
    } catch (error) {
        Promise.reject()
    }
} 

// ----------------------------checks user is authenticated or not-------------------

export const authenticateUser=async()=>{
    try {
        const {data}=await axios.get('/auth',{withCredentials:true})
        
        
        
        return Promise.resolve(data)
        
    } catch (error) {
        Promise.reject()
    }

}


// ---------------------------google authentication--------------
export const googleauth=async()=>{
    try {
        window.location.href="http://localhost:3000/auth/google/callback"
    } catch (error) {
        Promise.reject()
    }
}


// ------------------------------calls sellitem api------------------------


export const SellItemapi=async(values)=>{
    try {
        const {brand,price,location,image,description}=values

        const formdata=new FormData();
        formdata.append('brand',brand);
        formdata.append('location',location);
        formdata.append('image',image);
        formdata.append('price',price);
        formdata.append('description',description);




        const {status,data}=await axios.post('/sellitem',formdata,{withCredentials:true})
        if (status===200){
            alert("done")
        }

        return Promise.resolve(data)
        
    } catch (error) {
        return Promise.reject(error.message)
    }
}