import { createContext, useState, useEffect } from "react";
import { UseAuthContext } from "./AuthContext";
import io from 'socket.io-client';

export const SocketContext = createContext();

export const SocketContextProvider = ({children}) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const {auth} = UseAuthContext();

    useEffect(() => {
        if(auth){
            const socket = io("http://localhost:5000");
            setSocket(socket);
            return () => socket.close();
        }else{
            if(socket){
                socket.close();
                setSocket(null);
            }
        }
    },[]);

    return(
        <SocketContext.Provider value={{socket, onlineUsers}}>
            {children}
        </SocketContext.Provider>
    )
}