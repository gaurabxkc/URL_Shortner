// API functions to connect frontend to backend

import { axiosInstance } from "../utils/axiosInstance.js";

export const createShortUrl = async (url) => {
   const data = await axiosInstance.post("/create", {url});
   return data.data
}