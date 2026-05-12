import Contact from "../models/contact.model.js";

export const ContactUs = async (req, res) => {
    try {
        const { name, email, phoneno, message } = req.body;

        if (!name || !email || !phoneno || !message) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            });
        }

        if (!/^[0-9]{10}$/.test(phoneno)) {
            return res.status(400).json({
                message: "Phone number must be 10 digits",
                success: false
            });
        }
        
        const newcontact = await Contact.create({
            name,
            email,
            phoneno,
            message
        });

        return res.status(201).json({
            message: "Contact saved successfully",
            success: true,
            data: newcontact
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Failed to Contact Us",
            success: false
        });
    }
};