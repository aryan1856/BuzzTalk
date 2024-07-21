import React from 'react'
import SideBar from '../../components/sidebar/SideBar'
import MessageContainer from '../../components/messages/MessageContainer'
import { UseAuthContext } from '../../context/AuthContext'

const Home = () => {
  const {auth} = UseAuthContext();
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-4 p-4 bg-gray-400 bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg">
        <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          BuzzTalk
        </span>
        <div className="flex items-center ml-4">
          <span className="mr-2 text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600">
            {auth.fullName}
          </span>
          <div className="image ml-2">
            <img src={auth.profilePic} alt="user" className="rounded-full w-10 h-10 " />
          </div>
        </div>
      </div>
      <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0">
        <SideBar/>
        <MessageContainer/>
      </div>
    </div>
  )
}

export default Home
