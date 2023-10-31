import mongoose from "mongoose";

const FeedbackSchema=new mongoose.Schema({
    feedbackType:String,
    feedbackContent:String
})

const Feedback=mongoose.model('feedback',FeedbackSchema);

export default Feedback