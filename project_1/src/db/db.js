const mongoose = require("mongoose")

async function connectDB() {
    await mongoose.connect(process.env.mongo_db)
    console.log("db connected")
}

module.exports = connectDB