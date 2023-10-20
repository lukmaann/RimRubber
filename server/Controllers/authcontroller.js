export const authenticateUser=(req,res,next)=>{
    if(req.isAuthenticated()){
        return next()
    }else{
        res.status(401).send("unauthorised")
    }
}