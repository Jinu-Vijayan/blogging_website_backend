const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../model")
require("dotenv").config();

const signUp = async (req,res) => {

    try{

        const {userName, password, email} = req.body;
        const SALT_ROUND = process.env.SALT_ROUND;

        if(!userName || !password || !email){
            const errObj = {
                statusCode : 404,
                message : "Please give all require details"
            }
            throw new Error(JSON.stringify(errObj));
        };

        const userExists = await UserModel.findOne({email : email});

        if(userExists){
            const errObj = {
                statusCode : 404,
                message : "User already exists"
            }

            throw new Error(JSON.stringify(errObj));
        }

        const salt = await bcrypt.genSalt(Number(SALT_ROUND));
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new UserModel({
            userName,
            email,
            password : hashedPassword
        });

        const user = await newUser.save();
        res.status(201).json({
            message : "Account creation successful",
            userId : user._id
        });

    }catch(err){
        
        const error = JSON.parse(err.message);
        return res.status(error.statusCode || 500).json({
            message : error.message || "INTERNAL SERVER ERROR OCCURED"
        })

    };
};

const logIn = (req,res) => {
    res.status(200).json({
        message : "Dummy response for logIn"
    })
};

const logOut = (req,res) => {
    res.status(200).json({
        message : "Dummy response for logOut"
    })
};

module.exports = {
    signUp,
    logIn,
    logOut
}