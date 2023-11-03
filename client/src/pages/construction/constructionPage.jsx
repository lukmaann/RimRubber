import Footer from "../../components/Footer/footer"
import Header from "../../components/Header/header"
import Style from "./constructionpage.module.css"
import construction from "../../assets/construction.png"
import { useNavigate } from "react-router-dom"

 const ConstructionPage=()=>{
    const navigate =useNavigate()
    return <div>
        <Header/>
        <div className={Style.main}>
            <img src={construction} alt="" />
            <h1>Page under Construction</h1>

            <button onClick={()=>navigate('/feedback')}>suggest me something</button>

        </div>
        
        <Footer/>
        
        </div>
 }

 export default ConstructionPage