import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { LuMessagesSquare } from "react-icons/lu";
import useConversation from '../../zustand/useConversation';

const IntialWindow = () =>{
  const currUser = JSON.parse(localStorage.getItem("curr-user"));
  return(
    <div className="flex items-center justify-center w-full h-full">
        <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
          <p>Welcome 👋 {currUser.fullName}</p>
          <p>Select a user to start chatting</p>
          <LuMessagesSquare className='text-3xl md:text-6xl text-center'/>
        </div>
    </div>
  )
}

const MessageContainer = () => {

  const {selectedConversation, setSelectedConversation} = useConversation();

  useEffect(() => {
      return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  // const isInitialWindow = true;
  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {!selectedConversation ? (<IntialWindow/>) : (
        <>
        <div className='bg-slate-500 px-4 py-2 mb-2'>
          <span className='label-text'>To:</span>
          <span className='text-gray-900 font-bold'> {selectedConversation.fullName}</span>
        </div>
        <Messages/>
        <MessageInput/>
      </>
      )}
    </div>
  )
}

export default MessageContainer