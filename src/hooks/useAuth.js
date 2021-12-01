import React,{useContext} from 'react'
import {CustomContext} from "../Context";

export function useAuth() {
    const {user} = useContext(CustomContext);
    return {
        isAuth: !!user.email,
        email: user.email,
        token: user.token,
        id: user.id
    }
}