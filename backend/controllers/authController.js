import bcrypt from "bcrypt"
import prisma from "../lib/prisma.js"
import jwt from "jsonwebtoken"


export const register = async (req, res) => {
    const { username, email, password } = req.body

    if(username.length == 0 || email.length == 0 || password.length == 0){
        return res.status(500).json({ "message": "failed to create user" })
    }

    //hash the password
    try {
        const hashedPassword = await bcrypt.hash(password, 10)

        //create new user
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword
            }
        })

        console.log(newUser)
        return res.status(201).json({ "message": "user created sucessfuly" })
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ "message": "failed to create user" })
    }

}

export const login = async (req, res) => {
    
    const { username, password } = req.body

    if(username.length == 0 || password.length == 0){
        return res.status(500).json({ "message": "failed to login user" })
    }

    try {
        console.log("hello")
        const user = await prisma.user.findUnique({
            where: { username }
        })

        if (!user) {
            return res.status(401).json({ "message": "Invalid credentials" })
        }

        const validPassword = await bcrypt.compare(password, user.password)

        if (!validPassword) { 
            return res.status(401).json({ "message": "Invalid credentials" })
        }

        const sessionTime = 1000*60*60*24*7

        const token =  jwt.sign({
            id: user.id,
            isAdmin: false
        }, "secretkey", {expiresIn:sessionTime})

        const {password:userpassword, ...userInfo} = user
        
        return res.cookie("token", token, {httpOnly:true, maxAge:sessionTime, secure:false}).json(userInfo)
    } catch (err) {
        console.log(err);
        return res.status(500).json({ "message": "failed to login" })
    }
}



export const logout = (req, res) => {
    return res.clearCookie("token").status(200).json({message:"user logged out"})
}