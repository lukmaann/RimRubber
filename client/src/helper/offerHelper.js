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

export const callWithdrawOffer=async(values)=>{
    try {
        const {postId,offerId,userId}=values;

        const {status}=await axios.get(`/withdrawoffer/${offerId}/${userId}/${postId}`);
        if(status===200){
            return Promise.resolve();
        }
    } catch (error) {
        Promise.reject(error.message)
    }
}