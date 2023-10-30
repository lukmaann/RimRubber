import { useState } from "react";
import Style from "./FeedbackForm.module.css";
import AssistantIcon from '@mui/icons-material/Assistant';
import FeedbackIcon from '@mui/icons-material/Feedback';
import BugReportIcon from '@mui/icons-material/BugReport';
import { useFormik } from "formik";

const FeedBackForm = () => {
  const [selected, setSelected] = useState("suggestion");

    const formik=useFormik({
        initialValues:{
            content:'',
        
        },validateOnBlur:false,
        validateOnChange:false,
        onSubmit:async(value)=>{
            value=await Object.assign(value,{feedback:selected})
            alert(value.feedback)
        }
    })
  return (
    <div className={Style.main}>
      <div>
        <ul className={Style.selectors}>
          <li
            className={selected === "suggestion" && Style.selected}
            onClick={() => setSelected("suggestion")}
          >
            {" "}
            Suggestions 
          </li>
          <li
            className={selected === "feedback" && Style.selected}
            onClick={() => setSelected("feedback")}
          >
            {" "}
            FeedBack 
          </li>
          <li
            className={selected === "bugs" && Style.selected}
            onClick={() => setSelected("bugs")}
          >
            {" "}
            Bugs
          </li>
        </ul>
      </div>
      <div className={Style.selectcontent}>
     
      { selected === "suggestion" && <h1>want to suggest something? <AssistantIcon/></h1>}
      { selected === "feedback" && <h1>want to give a feedback? <FeedbackIcon/></h1>}
      { selected === "bugs" && <h1>want to report a bug? <BugReportIcon/></h1>}

      </div>
      <form onSubmit={formik.handleSubmit}>
        <textarea className={Style.input} {...formik.getFieldProps('content')} placeholder="Type Here ✏️"/>
        <button type="submit" className={Style.submitbtn}>Submit</button>
      </form>

    </div>
  );
};

export default FeedBackForm;
