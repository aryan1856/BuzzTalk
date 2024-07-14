import React from 'react'
import { UseAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utils/extractTime';

const IndividualMessage = ({message}) => {

    const {auth} = UseAuthContext();
    const {selectedConversation} = useConversation();
    const fromMe = message.senderId === auth._id
    const chatClassName = fromMe ? 'chat chat-end' : 'chat chat-start'
    const profilePic = fromMe ? auth.profilePic : selectedConversation?.profilePic;
    const bgColor = fromMe ? 'bg-blue-500' : 'bg-gray-700';
  return (
    <div className={chatClassName}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src={profilePic} alt="user" />
            </div>
        </div>
        <div className={`chat-bubble text-white ${bgColor}`}>
            {message.message};
        </div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>
            {extractTime(message.createdAt)}
        </div>
    </div>
  )
}

export default IndividualMessage