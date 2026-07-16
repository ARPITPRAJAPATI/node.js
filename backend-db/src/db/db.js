const mongoose = require("mongoose")

async function connectDB() {
    await mongoose.connect("/arush")
    console.log("db connected")
}

module.exports = connectDB