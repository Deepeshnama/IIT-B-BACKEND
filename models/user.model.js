const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true , unique : true },
        password: { type: String, required: true },
        role: { type: String, enum: ["Librarian", "Member"], required: true },
        isActive : {type : Boolean , default : true}
    }
)
module.exports = mongoose.model("User" , userSchema)