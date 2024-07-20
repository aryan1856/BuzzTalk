import Conversation from "../models/conversation.js";
import Message from "../models/messages.js";
import { getReceiverSocketId, io} from "../socket/socket.js";

export const sendMessage = async (request, response) => {
    try {
        const {message} = request.body;
        const {id : receiverId} = request.params;
        const senderId = request.user._id;

        let conversation = await Conversation.findOne({
            participants : {$all : [senderId, receiverId]}
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants : [senderId, receiverId]
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        await conversation.save();
        await newMessage.save();

        const receiverSocketId = getReceiverSocketId(receiverId);
        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }

        response.status(201).json(newMessage);

    } catch (error) {
        response.status(500).json({error:"Internal server error"});
    }
}

export const getMessage = async (request, response) => {
    try {
        const {id : userToChatId} = request.params;
        const senderId = request.user._id;

        const conversation = await Conversation.findOne({
            participants : {$all : [senderId, userToChatId]}
        }).populate("messages");

        if(!conversation)
            return response.status(200).json([]);

        response.status(200).json(conversation.messages);

    } catch (error) {
        response.status(400).json("Error loading messages");
    }
}