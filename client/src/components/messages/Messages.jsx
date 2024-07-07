import React from 'react'
import IndividualMessage from './IndividualMessage'

const Messages = () => {
  return (
    <div className='px-4 flex-1 overflow-auto'>
        <IndividualMessage/>
        <IndividualMessage/>
        <IndividualMessage/>
        <IndividualMessage/>
        <IndividualMessage/>
    </div>
  )
}

export default Messages