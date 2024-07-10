import React, {useState} from 'react';
import toast from "react-hot-toast";
import {UseAuthContext} from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const {setAuth} = UseAuthContext();

  const login = async(username, password) => {
    const success = handleInputErrors(username, password);
    if(!success){
        return;    }
    setLoading(true);
    try {
        const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({username, password})
        })

        const data = await response.json();
        if(data.error){
            throw new Error(data.error);
        }

        localStorage.setItem("curr-user", JSON.stringify(data));
        setAuth(data);

        toast.success("Login Successful");
        toast.success(`Welcome ${data.fullName}`);

    } catch (error) {
        toast.error(error.message);
    }finally{
        setLoading(false);
    }
  }
  return {loading, login};
}

export default useLogin

function handleInputErrors(username, password){
    if(!username || !password){
        toast.error("Please fill all the fields");
        return false;
    }
    return true;
}