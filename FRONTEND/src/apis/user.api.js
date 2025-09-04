// API functions to connect frontend to backend

import { axiosInstance } from "../utils/axiosInstance.js";

export const registerUser = async (fullName, email, password) => {
   const data = await axiosInstance.post("/auth/user/register", { fullName, email, password });
   return data
}

export const loginUser = async (email, password) => {
   const data = await axiosInstance.post("/auth/user/login", { email, password });
   console.log(data);
   return data

}

export const logoutUser = async () => {
   const data = await axiosInstance.get("/auth/user/register");
   return data.data
}