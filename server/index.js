import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import loginRoutes from "./Routes/loginRoutes.js";
import connectDB from "./database/conn.js";
import passport from "passport";
import session from "express-session";
import authRoute from "./Routes/auth.js"
import sellRoute from "./Routes/sellRoutes.js"
import adRoutes from "./Routes/adRoute.js"


dotenv.config();
const app = express();

app.use(cors(
  {
    origin:"http://localhost:5173",
    credentials:true
  }
));

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
    cookie:{secure:true}
  })
);

app.use(passport.initialize());
app.use(passport.session())

app.use("/api", loginRoutes);
app.use("/auth",authRoute)
app.use('/api',sellRoute)
app.use('/api',adRoutes)


connectDB().then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log("server connected to database and started ");
  });
});
