import express from "express";
import connectDB from "./src/config/mongo.config.js";
import dotenv from "dotenv";
import short_url from "./src/routes/short_url.route.js"
import authRoutes from './src/routes/user.route.js';
import { redirectFromShortUrl } from "./src/controllers/short_url.controllers.js";
import cors from 'cors';
import attachUser from "./src/middleware/auth.middleware.js";
import cookieParser from 'cookie-parser';

dotenv.config({ path: "./.env" });

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(attachUser);

app.use("/api/create", short_url);
app.get("/:id", redirectFromShortUrl);

app.use("/api/auth", authRoutes);

app.listen(3000, () => {
   connectDB();
   console.log("Server is running on http://localhost:3000");
}); 