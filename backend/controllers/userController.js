import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt"

export const getUsers = async(req,res)=>{
    
    try{
        const users = await prisma.user.findMany()
        res.status(200).json(users)
    }catch(err){
        console.log(err);
        return res.status(500).json({message: "Failed to get users"})
    }
}



export const getUser = async(req,res)=>{
    const id = parseInt(req.params.id)
    try{
        const user = await prisma.user.findUnique({
            where:{id}
        })
        res.status(200).json(user)

    }catch(err){
        console.log(err);
        return res.status(500).json({message: "Failed to get user"})
    }
}



export const updateUser = async(req,res)=>{
    let id = req.params.id
    const tokenId = req.userId
    const {password, avatar, ...inputs} = req.body

    console.log("here")
    if(id != tokenId){
        return res.status(403).json({message:"Not fkin authorized"})
    }

    let updatedPassword = null
    try{
        if(password){
            updatedPassword = await bcrypt.hash(password, 10)
        }

        id = parseInt(id)
        const updatedUser = await prisma.user.update({
            where:{id},
            data: {
                ...inputs,
                ...(updatedPassword && {password:updatedPassword}),
                ...(avatar && {avatar})

            }
        })
        

        const {password:userPassword, ...rest} = updatedUser
        return res.status(200).json(rest)
    
    }catch(err){
        console.log(err);
        return res.status(500).json({message: "Failed to update user"})
    }
}


export const deleteUser = async(req,res)=>{
    let id = req.params.id
    const tokenId = req.userId

    if(id != tokenId){
        return res.status(403).json({message:"Not authorized"})
    }
    try{
        id = parseInt(id)
        await prisma.user.delete({
            where:{id}
        })

        res.status(200).json({message: "user deleted"})
    }catch(err){
        console.log(err);
        return res.status(500).json({message: "Failed to delete user"})
    }
}