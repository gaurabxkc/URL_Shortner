import urlSchema from "../models/shorturl.model.js"

export const saveShortUrl = async (shortUrl, url, userId) => {
   if (!/^https?:\/\//i.test(url)) {    //protocol checking
      url = "https://" + url;
   }
   const newUrl = new urlSchema({
      full_url: url,
      short_url: shortUrl,
   });

   if (userId) {
      newUrl.user_id = userId;
   }
   await newUrl.save();
}

export const getShortUrl = async (id) => {
   return await urlSchema.findOneAndUpdate({ short_url: id }, { $inc: { clicks: 1 } })
}