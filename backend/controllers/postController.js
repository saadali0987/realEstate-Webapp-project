import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const getPosts = async (req, res) => {
  const query = req.query;

  try {
    const posts = await prisma.post.findMany({
      where: {
        city: query.city || undefined,
        type: query.type || undefined,
        property: query.property || undefined,
        bedroom: query.bedroom  || undefined,
        bathroom: query.bathroom || undefined,
        price: {
          gte: parseInt(query.minPrice) || undefined,
          lte: parseInt(query.maxPrice) || undefined,
        },
      },
      include:{
        images:true
      }
    });

    // setTimeout(() => {
    res.status(200).json(posts);
    // }, 3000);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get posts" });
  }
};

export const getPost = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        postDetail: true,
        user: {
          select: {
            username: true,
            avatar: true,
          },
        },
        images:true
      },
    });


    const token = req.cookies?.token;


    if (token) {
      jwt.verify(token, "secretkey", async (err, payload) => {
        if (!err) {
          const saved = await prisma.savedPost.findUnique({
            where: {
              userId_postId: {
                postId: id,
                userId: payload.id,
              },
            },
          });
          if(saved){
            return res.status(200).json({ ...post, isSaved: true });
          }
          else{
            return res.status(200).json({ ...post, isSaved: false });
          }
          
          console.log("buee")
        }
      });
    }
    else{
      return res.status(200).json({ ...post, isSaved: false });
    }
    
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Failed to get post" });
  }
};




export const addPost = async (req, res) => {
  const body = req.body;
  const tokenUserId = req.userId;

  const {images: imagesArray, ...rest} = body.postData;

  console.log(imagesArray)
  console.log(rest)
  try {
    const newPost = await prisma.post.create({
      data: {
        ...rest,
        userId: tokenUserId,
        postDetail: {
          create: body.postDetail,
        },
      },
    });
    for(const img of imagesArray){
      await prisma.image.create({
        data:{
          url: img,
          postId: newPost.id
        }
      })
    }
    res.status(200).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create post" });
  }
};

export const updatePost = async (req, res) => {
  try {
    res.status(200).json();
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to update posts" });
  }
};

export const deletePost = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;

  try {
    const post = await prisma.post.findUnique({
      where: { id },
    });

    if (post.userId !== tokenUserId) {
      return res.status(403).json({ message: "Not Authorized!" });
    }

    await prisma.post.delete({
      where: { id },
    });

    res.status(200).json({ message: "Post deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to delete post" });
  }
};