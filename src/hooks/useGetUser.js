import { useState,useEffect } from "react";

export default function useGetUser(){
    const getCurrentUser = () => {
        const currentUserId = localStorage.getItem("currentUser"); 
        if (!currentUserId) return null;

        const users= JSON.parse(localStorage.getItem("user_data")) ||[]
        return users.find(user => user.id.toString() === currentUserId) || null

    }
    
    const [currentUser, setCurrentUser] = useState(null); 
    
    useEffect(() => {
        const updatedUser = getCurrentUser();
        setCurrentUser(updatedUser);
    }, [localStorage.getItem("user_data")]);

    return{
        currentUser, getCurrentUser, setCurrentUser
    }
}