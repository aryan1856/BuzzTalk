import React from 'react'
import SingleCoversation from './SingleCoversation'
import getConversations from '../../hooks/getConversations';
import {getRandom} from "../../utils/emoji";

const Conversations = () => {
  const {loading, conversations} = getConversations();
  console.log(conversations);
  return (
    <div className='py-2 flex flex-col overflow-auto'>
        {conversations.map((conversation, idx) => (
          <SingleCoversation
              key={conversation._id}
              conversation = {conversation}
              emoji={getRandom()}
              lastIdx={idx===conversations.length-1}
          />
        ))}
        {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  )
}

export default Conversations