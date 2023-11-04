/* eslint-disable react/prop-types */
import { Dialog,DialogTitle,DialogContent } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';




const PopUp = (props) => {
    const {openPopUp,children,title,setopenPopup}=props


  return (
    <Dialog open={openPopUp}>
    <DialogTitle>
        <div className="flex justify-between">
        {title}
        <button onClick={()=>setopenPopup(false)}><CloseIcon/></button>


        </div>
    </DialogTitle>
    <DialogContent>{children}</DialogContent>

    </Dialog>
  )
}

export default PopUp