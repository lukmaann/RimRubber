import adminModel from "../models/adminmodel.js";
import passport from "passport";

passport.use('adminLocal', adminModel.createStrategy());

passport.serializeUser((user, done) => {
  if (user instanceof adminModel) {
    console.log("admin serializeUser");
    console.log(user)
    done(null, user._id);
  } else {
    done(new Error('not an admin user'));
  }
});

passport.deserializeUser((id, done) => {
  adminModel.findById(id, (err, user) => {
    done(err, user);
  });
});



export const adminlogin=async(req,res,next)=>{
    try {
        passport.authenticate('adminLocal',(err,admin)=>{
            if(err){
                res.status(500).json({message:err.message})
            }

            if(!admin){
                res.status(401).send("unaythorised")


            }

            req.login(admin,(err)=>{
                if(err){
                    res.status(400).send("cant login")
                }

                const {hash,salt,...rest}=admin._doc;

                res.status(200).json(rest)
                
            })

        })(req,res,next)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const adminAuth=async(req,res)=>{
    try {
        const user=req.user;
        console.log(req.session);

        res.json({authenticated:req.isAuthenticated(),user})
    } catch (error) {
        res.status(500).send(error.message)
    }
}