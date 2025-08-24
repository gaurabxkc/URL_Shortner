import express from 'express';
import { createShortUrl } from "../controllers/short_url.controllers.js";

const router = express.Router();


router.post("/", createShortUrl);


export default router;