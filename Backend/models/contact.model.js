import mongoose from "mongoose"

const ContactSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    phoneno:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true
    },

})

const Contact = mongoose.model("Contact", ContactSchema)
export default Contact