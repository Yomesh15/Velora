import Subscriber from "../models/subscribe.model.js";
import nodemailer from "nodemailer";

export const subscribe = async (req, res) => {
    const { email } = req.body;

    try {
        if (!email) {
            return res.status(400).json({ message: "Email required" });
        }

        const existing = await Subscriber.findOne({ email });
        if (existing) {
            return res.status(400).json({ message: "Already subscribed" });
        }

        await Subscriber.create({ email });

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Velora" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Welcome to Velora 🎉",
            html: `
                         <div style="text-align:center; font-family:Arial">
                           <h2>🛍️ Welcome to Velora</h2>
                           <p>You have Successfully Subscribed!</p>
                           <p><b>You’ll Get Early Access to all Sales 🔥</b></p>
                           <p>Stay Tuned ❤️</p>
                           <br/>
                           <br/>
                           <p>Developer : ⚡ Yomesh Nagar ⚡</p>
                         </div>
                 `,
        });

        res.json({ success: true, message: "Subscribed ❤️" });

    } catch (error) {
        console.error("ERROR:", error);
        res.status(500).json({ message: "Server Error" });
    }
};