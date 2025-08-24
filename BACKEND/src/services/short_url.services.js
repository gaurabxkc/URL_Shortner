import { generateNanoId } from "../utils/helper.js";
import { saveShortUrl } from "../dao/short_url.js";


export const createShortUrlWithoutUser = async (url) => {
   const shortUrl = generateNanoId(6);

   await saveShortUrl(shortUrl, url);
   console.log("Received URL:", url);
   return shortUrl;
}
export const createShortUrlWithUser = async (url, userId) => {
   const shortUrl = generateNanoId(6);

   await saveShortUrl(shortUrl, url, userId);
   console.log("Received URL:", url);
   return shortUrl;
}