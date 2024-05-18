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

export const savePost = async(req,res)=>{
    const postId = req.body.postId;
    const tokenUserId = req.userId;

    try {
      const savedPost = await prisma.savedPost.findUnique({
        where: {
          userId_postId: {
            userId: tokenUserId,
            postId,
          },
        },
      });
  
      if (savedPost) {
        await prisma.savedPost.delete({
          where: {
            id: savedPost.id,
          },
        });
        res.status(200).json({ message: "Post removed from saved list" });
      } else {
        await prisma.savedPost.create({
          data: {
            userId: tokenUserId,
            postId,
          },
        });
        res.status(200).json({ message: "Post saved" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Failed to delete users!" });
    }
}


export const profilePosts = async (req, res) => {
  const tokenUserId = req.userId;
  try {
    const userPosts = await prisma.post.findMany({
      where: { userId: tokenUserId },
      include:{images:true}
    });
    const saved = await prisma.savedPost.findMany({
      where: { userId: tokenUserId },
      include: {
        post: true,
      },
    });


    const savedPosts2 = saved.map((item) => item.post);
    const ids = savedPosts2.map(item=>item.id)

    const savedPosts = await prisma.post.findMany({
      where:{
        id:{
          in:ids
        }
      },
      include:{images:true}
    })

    console.log(savedPosts2)
    res.status(200).json({ userPosts, savedPosts });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get profile posts!" });
  }
};  