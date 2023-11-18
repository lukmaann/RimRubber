import axios from "./axiosConfig";


export const callAddToCart=async(values)=>{
    try {
        const {userId,itemId}=values;
        const {status}=await axios.get(`/addtocart/${userId}/${itemId}`);
        if(status===200){
            return Promise.resolve()
        }else{
            return Promise.reject()
        }
    } catch (error) {
       return Promise.reject(error.message)
    }
}

export const callRemoveFromCart=async(values)=>{
    try {
        const {userId,itemId}=values;
        const {status}=await axios.get(`/removefromcart/${userId}/${itemId}`);
        if(status===200){
            return Promise.resolve()
        }else{
            return Promise.reject()
        }
    } catch (error) {
        return Promise.reject(error.message)
    }
}