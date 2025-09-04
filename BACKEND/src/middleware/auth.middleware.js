import { findUserByEmail, findUserById } from "../dao/user.dao.js";
import { verifyToken } from "../utils/token.js";

const attachUser = async (req, res, next) => {
   const token = req.cookies.token
   if (!token)
      return next();
   try {
      const decoded = verifyToken(token);
      const user = await findUserById(decoded.id);
      if (!user)
         return next();
      req.user = user
      next();
   } catch (error) {
      return next();
   }
}

export default attachUser;