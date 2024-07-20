import React, { useEffect, useRef } from 'react'
import IndividualMessage from './IndividualMessage'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {

  const {messages, loading} = useGetMessages();
  useListenMessages();
  const lastMessage = useRef();
  // console.log(messages);
  useEffect(() => {
    lastMessage.current?.scrollIntoView({ behavior: 'smooth' });
  },[messages, loading]);
  return (
    <div className='px-4 flex-1 overflow-auto'>

        {!loading && messages.length > 0 && messages.map((message) => (
          <div key={message.id} ref={lastMessage}>
            <IndividualMessage message={message} />
          </div>
        ))}

        {loading && [...Array(5)].map((_, idx) => <MessageSkeleton key={idx}/>)}

        {!loading && messages.length===0 && (
          <p className='text-center'>Send a message to start the comversation</p>
        )}
    </div>
  )
}

export default Messages