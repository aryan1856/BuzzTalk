import React from 'react'

const IndividualMessage = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='1-10 rounded-full'>
                <img src="" alt="user" />
            </div>
        </div>
        <div className='chat-bubble text-white bg-blue-500'>
            Hi there! What's up?
        </div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>
            17:56
        </div>
    </div>
  )
}

export default IndividualMessage