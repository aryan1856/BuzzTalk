import User from "../models/userModel.js";


export const getUsersForSideBar = async(request, response) => {
    try {
        const loggedInUserId = request.user._id;
        const allUsers = await User.find({_id : {$ne : loggedInUserId}}).select("-password");
        response.status(200).json(allUsers);
    } catch (error) {
        console.log("Error in getUserForSideBar", error.message);
        response.status(400).json("Internal Server Error");
    }
}