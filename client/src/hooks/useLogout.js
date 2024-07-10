import React, {useState} from 'react'
import toast from "react-hot-toast";
import{UseAuthContext} from "../context/AuthContext";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const {setAuth} = UseAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
        const response = await fetch("api/auth/logout", {
            method: "POST",
            headers: {"Content-Type" : "apllication/json"}
        })
        const data = await response.json();
        if(data.error){
            throw new Error(data.error);
        }
        localStorage.removeItem("curr-user");
        setAuth(null);
        toast.success("User logged out");
    } catch (error) {
        toast.error(error.message);
    }finally{
        setLoading(false);
    }
  }

  return {loading, logout};
}

export default useLogout