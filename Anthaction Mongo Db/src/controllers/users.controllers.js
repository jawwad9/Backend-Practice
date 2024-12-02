import mongoose from "mongoose";
import User from "../models/users.models.js"

const registerUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user) return res.status(401).json({ message: "user already " })
        
        const createUser = await User.create({
            email,
            password,
        })
        res.json({ 
            message: "user created",
            data: createUser
         })
}

export { registerUser }