// axiosConfig.js

import axios from 'axios';
import checkMode from "./devOrProduction";


const instance = axios.create({
  baseURL: checkMode()
  ? "http://localhost:3000/api"
  : "https://rimrubberbackend.onrender.com/api", 
  withCredentials: true,
});

export default instance;
