import bcrypt from 'bcryptjs';

export const passwordHash = async (password) => {
   return await bcrypt.hash(password, 10);
}

export const passwordVerify = async (password, savedPassowrd) => {
   console.log("gere");
   return await bcrypt.compare(password, savedPassowrd);
}