import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export const loginUser = async (request, response) => {
    try {
        const {username, password} = request.body;
        const user = await User.findOne({username});
        const isPasswordMatched = await bcryptjs.compare(password, user?.password || "");

        if(!user | !isPasswordMatched){
            return response.status(400).json({error : "Invalid username of password"});
        }

        generateToken(user._id, response);
        response.status(200).json({
            _id : user._id,
            fullName : user.fullName,
            username : user.username,
            profilePic : user.profilePic
        });

    } catch (error) {
        console.log("Error in login", error.message);
        response.status(400).json({error : "Server error"});
    }
}

export const logout = async (request, response) => {
    try {
        response.cookie("jwt","", {maxAge : 0});
        response.status(200).json({message : "Logged out successfully"});
    } catch (error) {
        response.status(400).json("Internal server error");
    }
}

export const register = async(request, response) => {
    try {
        const {fullName, username, password, confirmPassword, gender} = request.body;

        if(password!=confirmPassword)
            return response.status(400).json({error : "Passwords don't match"});
        
        const user = await User.findOne({username});

        if(user)
            return response.status(400).json("Username already exists");

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const maleProfile = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const femaleProfile = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password : hashedPassword,
            gender,
            profilePic : gender==="male"? maleProfile : femaleProfile
        })

        if(newUser){
            generateToken(newUser._id, response);
            await newUser.save();
            response.status(201).json({
                _id : newUser._id,
                fullName : newUser.fullName,
                profilePic : newUser.profilePic
            });
        }else{
            response.status(400).json({error : "Invalid User Data"});
        }

    } catch (error) {
        // response.status(400).json({error : error.message});
        response.status(500).json({error : "Internal server error"});
    }
}