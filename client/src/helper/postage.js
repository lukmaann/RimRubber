const postAge=(createdAt)=>{
    const createddate=new Date(createdAt);
    const curentdate=new Date();

    const differnce=curentdate-createddate;

    return Math.floor(differnce/1000/60/60/24)

    
}

export default postAge