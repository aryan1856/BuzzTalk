import React from 'react'
import IndividualMessage from './IndividualMessage'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton';

const Messages = () => {

  const {messages, loading} = useGetMessages();
  console.log(messages);
  return (
    <div className='px-4 flex-1 overflow-auto'>
        {loading && [...Array(5)].map((_, idx) => <MessageSkeleton key={idx}/>)}

        {!loading && messages.length===0 && (
          <p className='text-center'>Send a message to start the comversation</p>
        )}
    </div>
  )
}

export default Messages