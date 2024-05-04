import jwt from "jsonwebtoken"

export const verifyToken = (req,res, next)=>{
    const token = req.cookies.token

    if(!token){
        return res.status(401).json({message:"Not authenticated"})
    }

    jwt.verify(token, "secretkey", async(err, payload)=>{
        if(err){
            return res.status(403).json({message: "invalid token"})
        }

        req.userId = payload.id
        next()
    })
 }