import { findUserByEmail, saveUser } from "../dao/user.dao.js"
import { passwordHash, passwordVerify } from "../utils/hasher.js";
import { generateToken } from "../utils/token.js";

export const createUser = async (fullName, email, password) => {
   if (await findUserByEmail(email)) throw new Error("User Already Exists");

   const user = await saveUser(fullName, email, await passwordHash(password));

   const token = generateToken({ id: user._id });
   return { token, user };
}

export const enterUser = async (email, password) => {
   console.log(email, password);
   const user = await findUserByEmail(email);

   if (!user)
      throw new Error("User Doesn't Exist");

   const isPasswordCorrect = await passwordVerify(password, user.password);
   if (!isPasswordCorrect)
      throw new Error("User Doesn't Exist");

   const token = generateToken({ id: user._id });

   return { token, user };
}