import bcrypt from "bcrypt"
import prisma from "../lib/prisma.js"
import jwt from "jsonwebtoken"


export const register = async (req, res) => {
    const { username, email, password } = req.body

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
        res.status(201).json({ "message": "user created sucessfuly" })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ "message": "failed to create user" })
    }

}

export const login = async (req, res) => {
    const { username, password } = req.body

    try {
        const user = await prisma.user.findUnique({
            where: { username }
        })

        if (!user) {
            res.status(401).json({ "message": "Invalid credentials" })
        }

        const validPassword = await bcrypt.compare(password, user.password)

        if (!validPassword) { 
            res.status(401).json({ "message": "Invalid credentials" })
        }

        const sessionTime = 1000*60*60*24*7

        const token =  jwt.sign({
            id: user.id
        }, "secretkey", {expiresIn:sessionTime})
        
        res.cookie("token", token, {httpOnly:true, maxAge:sessionTime}).json({message:"user logged in"})
    } catch (err) {
        console.log(err);
        res.status(500).json({ "message": "failed to login" })
    }
}



export const logout = (req, res) => {
    res.clearCookie("token").status(200).json({message:"user logged out"})
}