import React,{useContext} from 'react';
import {CustomContext} from "../../Context";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from "../Form/Form";
import {useNavigate} from 'react-router-dom'
import {addUsers} from "../../globalFunc/addUsers";

const Register = () => {
    const {addUser} = useContext(CustomContext);
    const navigate = useNavigate();
    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user})=>{
                console.log(user);
                addUsers(user, addUser);
                navigate('/')
            })
            .catch(console.error);
    };

    return (
        <section>
            <Form handleClick={handleRegister} title={'Регистрация'} action={'Зарегестрироваться'} variant={'Уже зарегестрированы?'} link='Войти' path='login' />
        </section>
    );
};

export default Register;