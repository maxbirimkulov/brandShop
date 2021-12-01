import React, {useContext} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {CustomContext} from "../../Context";
import {addUsers} from "../../globalFunc/addUsers";

const Google = ({navigate}) => {
    const {addUser} = useContext(CustomContext);
    const provider = new GoogleAuthProvider();
    const addUserWithGoogle = () => {
        const auth = getAuth();
        auth.languageCode = 'it';
        signInWithPopup(auth, provider)
            .then(({user}) => {
                console.log(user);
                addUsers(user, addUser);
                navigate('/')
            }).catch(console.error);

    };
    return (
        <li className='form__list-item' onClick={() => addUserWithGoogle()}>
            <FontAwesomeIcon icon={faGoogle}/>
        </li>
    );
};

export default Google;