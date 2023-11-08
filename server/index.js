import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import loginRoutes from "./Routes/loginRoutes.js";
import connectDB from "./database/conn.js";
import passport from "passport";
import session from "express-session";
import authRoute from "./Routes/auth.js";
import sellRoute from "./Routes/sellRoutes.js";
import adRoutes from "./Routes/adRoute.js";
import feedbackRoutes from "./Routes/feedbackRoutes.js"
import offerRoute from "./Routes/offerRoutes.js"
import {v2 as cloudinary} from 'cloudinary';


dotenv.config();
const app = express();
app.set("trust proxy", 1);

dotenv.config();

          

          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD, 
  api_key: process.env.CLOUDINARY_APIKEY, 
  api_secret: process.env.CLOUDINARY_SECRET 
});



app.use(
  cors({
    origin: [
      "https://rimrubber.netlify.app",
      "http://localhost:5173",
      "http://localhost:5174",
    ],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  })
);

const domainname=process.env.NODE_ENV==='production'?"https://rimrubber.netlify.app":"http://localhost:5173"

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", domainname );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});
// ----------------------------------session creation-----------

let domain = process.env.NODE_ENV === 'production' ? ".rimrubberbackend.onrender.com" : ".localhost";
let secure =process.env.NODE_ENV ==='production'
let samesite=process.env.NODE_ENV ==='production'?'none':'lax'

app.use(
  session({
    saveUninitialized: false,
    secret: process.env.SECRET,
    resave: false,
    cookie: {
      secure: secure,
      sameSite: samesite,
      domain: domain,
      path: "/",
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api", loginRoutes);
app.use("/auth", authRoute);
app.use("/api", sellRoute);
app.use("/api", adRoutes);
app.use("/api",feedbackRoutes);
app.use("/api",offerRoute);

connectDB().then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log("server connected to database and started ");
  });
});
