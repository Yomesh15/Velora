import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const RegisterUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            });
        }

        const existing = await User.findOne({ email });
        if (existing) {
            return res.status(400).json({
                message: "User Already Exists",
                success: false
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newuser = await User.create({
            name,
            email,
            password: hashedPassword
        });

        return res.status(201).json({
            message: "SignUp Successful",
            success: true,
            user: {
                _id: newuser._id,
                name: newuser.name,
                email: newuser.email
            }
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Failed to SignUp",
            success: false
        });
    }
};


export const LoginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "Invalid Email or Password",
                success: false
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid Email or Password",
                success: false
            });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        return res.status(200).json({
            message: "Login Successful",
            success: true,
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Login Failed",
            success: false
        });
    }
};

