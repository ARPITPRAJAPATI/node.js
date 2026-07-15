const mongoose = require("mongoose")

async function connectDB() {
    await mongoose.connect("mongodb+srv://backend-database:Arpit2005@cluster0.6cxh2kd.mongodb.net/arush")
    console.log("db connected")
}

module.exports = connectDB