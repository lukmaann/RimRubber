import axios from "./axiosConfig";



export const callMakeOffer=async(values)=>{
    try {
        const {buyerId,itemId,offeredPrice}=values;

        const {status}=await axios.post('/makeoffer',{buyerId,itemId,offeredPrice});

        if(status===200){
            return Promise.resolve("offer sent")

        }

    } catch (error) {
        Promise.reject(error.message)
    }
}