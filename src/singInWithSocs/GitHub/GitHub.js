import React, {useContext} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import {CustomContext} from "../../Context";
import {addUsers} from "../../globalFunc/addUsers";


const GitHub = ({navigate}) => {
    const {addUser} = useContext(CustomContext);
    const provider = new GithubAuthProvider();

    const addUserWithGitHub = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then(({user}) => {
                console.log(user);
                addUsers(user, addUser);
                navigate('/')
            }).catch(console.log);
    };

    return (
        <li className='form__list-item' onClick={()=>addUserWithGitHub() }>
            <FontAwesomeIcon icon={faGithub}/>
        </li>
    );
};

export default GitHub;