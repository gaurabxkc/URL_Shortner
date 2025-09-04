import { findUserByEmail } from "../dao/user.dao.js";
import { createUser, enterUser } from "../services/auth.service.js";

export const registerUser = async (req, res) => {
   const { fullName, email, password } = req.body;

   const user = await createUser(fullName, email, password);

   res.cookie("token", user.token);
   res.status(201).json({
      message: "User Registered Successfully",
      user: {
         fullName: user.user.fullName,
         email: user.user.email,
      }
   })
}


export const loginUser = async (req, res) => {
   const { email, password } = req.body;

   console.log(password);

   const user = await enterUser(email, password);

   res.cookie("token", user.token);
   res.status(201).json({
      message: "User Logged In Successfully",
      user: {
         fullName: user.user.fullName,
         email: user.user.email,
      }
   })
}


export const logoutUser = (req, res) => {
   res.clearCookie("token")
   res.status(200).json({
      message: "User Logged Out Successfully"
   })
}