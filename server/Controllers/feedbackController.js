import Feedback from "../models/feedbackmodel.js";

const giveFeedback = async (req, res) => {
    try {
        const { feedbackType, feedbackContent } = req.body;
        const feedback = new Feedback({ feedbackType, feedbackContent });

        await feedback.save();
        res.status(201).send("Feedback recorded");
    } catch (error) {
        console.error("Error in recording feedback:", error);
        res.status(500).send('Could not record feedback');
    }
};

export default giveFeedback;
