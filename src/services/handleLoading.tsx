import React from 'react';
import { useNavigate } from 'react-router';


export const handleLoadingToUrl = (url:string) => {
    const navigate = useNavigate()
    navigate("/loading...")
    setInterval(() => {
        navigate("/"+url)
    },1000)
}

