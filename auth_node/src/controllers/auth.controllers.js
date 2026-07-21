const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
async function registerUser(req,res) {
    const {username , email, password} = req.body;
    

    const userExist = await userModel.findOne({
        email
    })

    if(userExist){
        return res.status(409).json({
            message: "user already exists"
        })
    }

    const user = await userModel.create({
        username , email , password
    }) 

    const token =jwt.sign({
        id : user._id,
        
    },process.env.JWT_SECRET)
    res.cookie("token",token)
    res.status(201).json({
        message: "user done",
        user,
        token
    })
}

module.exports={registerUser};