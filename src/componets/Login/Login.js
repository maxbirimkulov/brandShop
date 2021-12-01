import React, {useContext, useEffect} from 'react';
import {CustomContext} from "../../Context";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from "../Form/Form";
import {useNavigate} from 'react-router-dom'
import {addUsers} from "../../globalFunc/addUsers";

const Login = ({shoes,setShoes}) => {
    const navigate = useNavigate();
    const {addUser} = useContext(CustomContext);

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                addUsers(user, addUser);
                navigate('/')
            })
            .catch(console.error);
    };

    useEffect(()=>{
        if (localStorage.getItem('email') !== null){
            addUser({
                email: 'asasd@asdasd',
                token: localStorage.getItem('token'),
                id: localStorage.getItem('id'),
                userName: localStorage.getItem('userName'),
                cart: JSON.parse(localStorage.getItem('cart')),
                favorites: JSON.parse(localStorage.getItem('favorites')),
            });
            setShoes(shoes);
            navigate('/')

        }

    },[]);

    return (
        <section>
            <Form handleClick={handleLogin} title={'Войти в аккаунт'} action={'войти'} variant={'Not register'} link='Create New Account' path='register' />
        </section>
    );
};

export default Login;