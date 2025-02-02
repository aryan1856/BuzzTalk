import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import GenderCheckBox from './genderCheckBox.jsx'
import useRegister from '../../hooks/useRegister'

const SignUp = () => {

  const [inputs, setInputs] =  useState({
    fullName : "",
    username : "",
    password : "",
    confirmPassword : "",
    gender : ""
  })

  const handleCheckbox = (gender) => {
    setInputs({...inputs, gender})
  }

  const {loading, register} = useRegister();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(inputs);
    await register(inputs);
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
          <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Register to
            <span className='text-blue-500'> BuzzTalk</span>
          </h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label className='label p-2'>
                <span className='text-base label-text'>Name</span>
              </label>
              <input type="text" placeholder='Ex. Hana Mathews' className='input input-bordered input-success w-full' 
              value={inputs.fullName} onChange={(e) => setInputs({...inputs, fullName : e.target.value})}
              />
            </div>

            <div>
              <label className='label p-2'>
                <span className='text-base label-text'>Username</span>
              </label>
              <input type="text" placeholder='Ex. hanamathews' className='input input-bordered input-success w-full'
              value={inputs.username} onChange={(e) => setInputs({...inputs, username : e.target.value})}
              />
            </div>

            <div>
              <label className='label p-2'>
                <span className='text-base label-text'>Password</span>
              </label>
              <input type="password" placeholder='Enter Password' className='input input-bordered input-success w-full'
              value={inputs.password}
              onChange={(e) => setInputs({...inputs, password : e.target.value})}
              />
            </div>

            <div>
              <label className='label p-2'>
                <span className='text-base label-text'>Confirm Password</span>
              </label>
              <input type="text" placeholder='Confirm Password' className='input input-bordered input-success w-full'
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({...inputs, confirmPassword : e.target.value})}
              />
            </div>

            <GenderCheckBox onCheckboxChange = {handleCheckbox} selectGender={inputs.gender}/>

            <Link to='/login' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block pb-4 pl-2'>Already Have an Account?</Link>

            <div>
              <button className='btn btn-outline btn-success w-full text-base'>
                Create Account
              </button>
            </div>

          </form>
        </div>
    </div>
  )
}

export default SignUp