import axios from "./axiosConfig";


export const ListItem=async(values)=>{
    try {
        const {image,description,name,stock,price}=values;

        const formdata=new FormData();
        formdata.append('name',name);
        formdata.append('description',description);
        formdata.append('stock',stock);
        formdata.append('image',image);
        formdata.append('price',price);



    const {status,data}=await axios.post('/admin/uploaditem',formdata);
    if(status===201){
        return Promise.resolve(data)
    }
    return Promise.reject()
    } catch (error) {
        Promise.reject()
        
    }
}

export const fecthListedItems=async()=>{
    try {
        const {status,data}=await axios.get('/admin/getlisteditems');
        if(status===200){
            return Promise.resolve(data)
        }
        return Promise.reject();
    } catch (error) {
        Promise.reject()
    }
}