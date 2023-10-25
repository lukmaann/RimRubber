import path from "path";
import DataUriParser from "datauri/parser.js"


const duri=new DataUriParser()

const Uri=(file)=>{
    return duri.format(path.extname(file.originalname).toString(),file.buffer);
}

export default Uri