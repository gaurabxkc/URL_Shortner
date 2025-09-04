import { getShortUrl } from "../dao/short_url.js";
import { createShortUrlWithoutUser, createShortUrlWithUser } from "../services/short_url.services.js";

export const createShortUrl = async (req, res) => {
   const { url } = req.body;
   let shortUrl
   if (req.user) {
      const { slug } = req.body;
      shortUrl = await createShortUrlWithUser(url, slug, req.user._id);
   } else {
      shortUrl = await createShortUrlWithoutUser(url);
   }

   res.send(process.env.APP_URL + shortUrl);
}

export const redirectFromShortUrl = async (req, res) => {
   const { id } = req.params
   const url = await getShortUrl(id);
   console.log(url);
   if (url) {
      res.redirect(url.full_url);
   } else {
      res.status(404).send("Not Found")
   }
}
