import userModel from "../models/userModel.js";
import passport from "passport";

passport.use(userModel.createStrategy());
passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());




// ------------------------verify if user exists or not ----------------------
export const userVerify = async (req, res) => {
  try {
    const { username } = req.method === "GET" ? req.query : req.body;
    const userExist = await userModel.findOne({ username });

    if (userExist) {
      res.status(200).send("user exists");
    } else {
      res.status(404).send("user not found");
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};





// ----------------------------------register new user-------------------------
export const registerUser = async (req, res) => {
  try {
    const { username, password, email, mobile, firstName, lastName } = req.body;

    const existingUser = await userModel.findOne({ username });
    if (existingUser) {
      return res.status(409).send("user already exists");
    }

    const user = new userModel({
      username,
      email,
      mobile,
      firstName,
      lastName,
    });

    await userModel.register(user, password, (err) => {
      if (!err) {
        return res.status(201).json({ message: "user created" });
      } else {
        return res.status(500).json({ err: err.message });
      }
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};




// ------------------------------login user------------------------------------
export const loginuser = async (req, res,next) => {
  try {
    passport.authenticate("local", (err, user,info) => {
      if (err) return res.status(500).json({ error: "internal error" });

      if (!user) return res.status(401).json({ error: "Invalid credentials" });
      req.login(user, (err) => {
        if (err) return res.status(500).json({ message: "cant login" });
        const { hash, salt, ...rest } = user._doc;
        res.status(200).json(rest);
      });
    })(req, res,next);
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};



// ----------------------- check user is authenticated or not------------------

export const auth =async(req,res)=>{
  try {
    res.send(req.isAuthenticated());
  } catch (error) {
    res.status(500).json({error:error.message})
  }
}


// --------------------------------logout user---------------------------------

export const logoutUser=async(req,res)=>{
  try {
    req.logout((err)=>{
      if(err){
        res.send(err)
      }
      res.send("logged out")
    });
  } catch (error) {
    res.status(500).json({error:error.message})
  }
}