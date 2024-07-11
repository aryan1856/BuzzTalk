import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const getConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getAllConversations = async () => {
        setLoading(true);
        try {
            const response = await fetch("/api/users");
            const data = await response.json();
            if(data.error){
                throw new Error(data.error);
            }
            setConversations(data);
        } catch (error) {
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    }
    getAllConversations();
  }, [])
  return {loading, conversations}
}

export default getConversations