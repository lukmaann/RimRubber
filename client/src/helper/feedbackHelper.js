import axios from "./axiosConfig"


export const giveFeedback=async(values)=>{
    try {
        const {feedbackType,feedbackContent}=values;

        const {status}= await axios.post('/givefeedback',{feedbackContent,feedbackType});
        if(status===201){
            alert("data saved")
        }

    } catch (error) {
        Promise.reject(error.message)
    }
}



