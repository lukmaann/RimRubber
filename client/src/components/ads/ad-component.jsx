/* eslint-disable react/prop-types */
import demoImage from "../../assets/demoimg.png"
import { delAd, updateAdsStatus } from "../../helper/adsHelper"
import Style from "./ads.module.css"
import { myAdsStore } from "../../store/store"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const AdComponent = (props) => {

    const navigate=useNavigate()
    const myads = myAdsStore((state) => state)

    const { image, brand, price, id, status } = props
    const delItem = () => {
        toast.promise(delAd(id), {
            loading: "Deleting ad",
            success: "Ad deleted",
            error: "error"
        })
        myads.removeAds(id)

    }

    let statusbg = '';
    let statusText = '';
    if (status === 'active') {
        statusbg = 'bg-green-500'
        statusText = "This ad is now live"
    } else if (status === 'pending') {
        statusbg = 'bg-pink-500'
        statusText = "This ad is pending for approval"

    } else if (status === 'rejected') {
        statusbg = 'bg-red-500'
        statusText = "This ad is rejected "

    } else if (status === 'sold') {
        statusbg = 'bg-purple-500'
        statusText = "The item is sold"

    }

    const updateAd = () => {
        const update = updateAdsStatus({ type: 'sold', id });
        toast.promise(update, {
            loading: "Updating status",
            error: "cant update now",
            success: "Status updated"
        })

        update.then(() => {
            myads.updateAdStatus({ id: id, status: 'sold' })
        })
    }

    return (
        <div className={Style.main} onClick={()=>navigate('/singlead',{state:{id}})}>
            <div className={Style.topdiv}>
                <h1 className={Style.tag}>my Ad</h1>

                <img src={image || demoImage} alt="" />
                <div className={Style.price}>
                    <h1>{brand}</h1>
                    <h1>₹ {price}</h1>
                </div>

            </div>
            <div className={Style.bottomdiv}>
                <div>
                    <button className={statusbg}>{status}</button>
                    <h1>{statusText}</h1>

                </div>
                <div className={Style.buttonbox}>
                    <button onClick={updateAd}>Mark as sold</button>

                    <button onClick={delItem}>Delete Ad</button>

                </div>

            </div>


        </div>
    )
}

export default AdComponent