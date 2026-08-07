import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://deeper-life-church-backend-3.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;