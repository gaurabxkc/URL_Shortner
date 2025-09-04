import userModel from '../models/user.model.js';

export const findUserByEmail = async (email) => {
   return await userModel.findOne({ email });
}
export const findUserById = async (_id) => {
   return await userModel.findOne({ _id });
}

export const saveUser = async (fullName, email, password) => {
   const newUser = new userModel({
      fullName: fullName,
      email: email,
      password: password,
   })

   return await newUser.save();
}