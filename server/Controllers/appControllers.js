import userModel from "../models/userModel.js"
import passport from "passport";

passport.use(userModel.createStrategy());
passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());




export const registerUser = async (req, res) => {
  try {
    const { firstname, lastname, mobile, address, username,password, email } = req.body;

    const user = new userModel({
      username,
      firstname,
      lastname,
      mobile,
      address,
      password,
      email,
    });
    console.log("lukmaan");
    console.log(username);

   

   await userModel.register(user,password);
   res.status(201).send("user registered successfully")
  } catch (error) {
    res.status(500).send("error "+error.message);
  }
};
