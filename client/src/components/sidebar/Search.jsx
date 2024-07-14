import React, { useState } from 'react'
import { RiUserSearchFill } from "react-icons/ri";
import useConversation from '../../zustand/useConversation';
import getConversation from '../../hooks/getConversations';
import toast from 'react-hot-toast'

const Search = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const {conversations} = getConversation();

  const handleSubmit= (e) => {
      e.preventDefault();
      if(!search){
          toast.error("Enter username to search!");
          return;
      }
      if(search.length < 3){
        toast.error("Enter at least 3 characters to search!");
        return;
      }
      const conversation = conversations.find((user) => user.fullName.toLowerCase().includes(search.toLowerCase()));

      if(conversation){
        setSelectedConversation(conversation);
        setSearch("");
      } else{
        toast.error("No user found!");
      }
  }
  
  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
        <input type="text" placeholder='Search___' className='input input-bordered rounded-full input-success' value={search} onChange={(e) => setSearch(e.target.value)}/>
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
            <RiUserSearchFill/>
        </button>
    </form>
  )
}

export default Search