import React from 'react'
import { RiUserSearchFill } from "react-icons/ri";

const Search = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" placeholder='Search___' className='input input-bordered rounded-full input-success' />
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
            <RiUserSearchFill/>
        </button>
    </form>
  )
}

export default Search