 import jwt from "jsonwebtoken"
 
 export const shouldBeLoggedIn = async(req,res)=>{
    const token = req.cookies.token

    if(!token){
        return res.status(401).json({message:"Not authenticated"})
    }

    jwt.verify(token, "secretkey", async(err, payload)=>{
        if(err){
            return res.status(403).json({message: "invalid token"})
        }

        return res.status(200).json({message: "Authenticated"})
    })
 }


 export const shouldBeAdmin = async(req,res)=>{
    const token = req.cookies.token

    if(!token){
        return res.status(401).json({message:"Not authenticated"})
    }

    jwt.verify(token, "secretkey", async(err, payload)=>{
        if(err){
            return res.status(403).json({message: "invalid token"})
        }
        if(!payload.isAdmin){
            return res.status(403).json({message: "Not authorized"})
        }

        return res.status(200).json({message: "Authenticated"})
    })  
 }