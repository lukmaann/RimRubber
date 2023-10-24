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

dotenv.config();
const app = express();
app.set('trust proxy', 1);

app.use(
  cors({
    origin: ["https://rimrubber.netlify.app", "http://localhost:5174","http://localhost:5173"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://rimrubber.netlify.app");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
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

app.use(
  session({
    saveUninitialized: false,
    secret: process.env.SECRET,
    resave: false,
    cookie: {
      secure: true,
      sameSite: "none",
      domain: ".rimrubberbackend.onrender.com",
path:"/"
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api", loginRoutes);
app.use("/auth", authRoute);
app.use("/api", sellRoute);
app.use("/api", adRoutes);

connectDB().then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log("server connected to database and started ");
  });
});
