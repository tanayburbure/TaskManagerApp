import jwt from "jsonwebtoken";
import User from "../models/user.model.js"

const authMiddleware = async (req ,res , next) => {
    try{
        //Read auth header
        const authHeader = req.headers.authorization;

        //Check bearer token
        if(!authHeader || !authHeader.startsWith("Bearer ")){
            return res.status(401).json({
                message : "Access Denied. Token required"
            })
        }
        
        const token = authHeader.split(" ")[1];

        //Verify JWT
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        //Find Authenticated user
        const user = await User.findById(decoded.id);
        if(!user){
            return res.status(401).json({
                message : "User no longer exists"
            })
        }

        //Attach user to request
        req.user = user;
        //continue to next middleware/route
        next();

    }catch(err){
        return res.status(401).json({
            message : "Invalid or expired token"
        })
    }
}

export default authMiddleware;