import React, {useContext} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import {faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import {CustomContext} from "../../Context";
import {addUsers} from "../../globalFunc/addUsers";

const Facebook = ({navigate}) => {
    const {addUser} = useContext(CustomContext);
    const provider = new FacebookAuthProvider();
    const addUserWithFacebook = () => {
        const auth = getAuth();
        auth.languageCode = 'it';
        signInWithPopup(auth, provider)
            .then(({user}) => {
                console.log(user);
                addUsers(user, addUser);
                navigate('/')
            })
            .catch(console.log);
    };

    return (
        <li className='form__list-item' onClick={()=> addUserWithFacebook()}>
            <FontAwesomeIcon icon={faFacebookSquare}/>
        </li>
    );
};

export default Facebook;