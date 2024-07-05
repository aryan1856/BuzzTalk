import React from 'react'
import SingleCoversation from './SingleCoversation'

const Conversations = () => {
  return (
    <div className='py-2 flex flex-col overflow-auto'>
        <SingleCoversation />
        <SingleCoversation />
        <SingleCoversation />
    </div>
  )
}

export default Conversations