import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast';
import { UseAuthContext } from '../context/AuthContext';


const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const {setAuth} = UseAuthContext();

  const register = async ({fullName, username, password, confirmPassword, gender}) => {
        const success = handleInputErrors({fullName, username, password, confirmPassword, gender});
        if(!success){
            // console.log("User data invalid for some reason");
            return;
        }

        try {
            const response = await fetch("api/auth/user", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username })
            });
        
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        
            const user = await response.json();
        
            if (user) {
                toast.error("Username already exists!");
                return;
            }
        } catch (error) {
            toast.error(error.message);
        }

        setLoading(true);
        try {
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers : {"Content-Type" : "application/json"},
                body: JSON.stringify({fullName, username, password, confirmPassword, gender})
            });

            const data = await response.json();
            if(data.error){
                throw new Error(data.error);
            }

            localStorage.setItem("curr-user", JSON.stringify(data));
            setAuth(data);

            toast.success("Account created successfully");
            toast.success(`Welcome ${data.fullName}`);
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false);
        }
  }
  return {loading, register}
}

export default useRegister

function handleInputErrors({fullName, username, password, confirmPassword, gender}){
    if(!fullName || !username || !password || !confirmPassword || !gender){
        toast.error("All fields are mandatory");
        return false;
    }

    if(password !== confirmPassword){
        toast.error("Password and Confirm Password must be same");
        return false;
    }

    if(password.length < 6){
        toast.error("Password must have at least 6 characters");
        return false;
    }

    return true;
}