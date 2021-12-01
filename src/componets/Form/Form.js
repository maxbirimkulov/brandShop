import React,{useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Google from "../../singInWithSocs/Google/Google";
import Facebook from "../../singInWithSocs/Facebook/Facebook";
import GitHub from "../../singInWithSocs/GitHub/GitHub";

const Form = ({ handleClick, title, action, variant, link,path}) => {

    const [email,setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    return (
        <div className='form'>
            <h2 className='form__title'>{title}</h2>
            <input value={email} type="email" placeholder='Email' className='form__input' onChange={(e)=> setEmail(e.target.value)}/>
            <input value={pass} type="password" placeholder='password' className='form__input' onChange={(e)=> setPass(e.target.value)}/>
            <p className='form__text'>{variant} <Link to={`/${path}`}>{link}</Link></p>

            <ul className='form__list'>
                <Google navigate={navigate}/>
                <Facebook navigate={navigate}/>
                <GitHub navigate={navigate}/>
            </ul>
            <Link to='/women'>women</Link>
            <button className='btn' onClick={()=> handleClick(email, pass)}>{action}</button>
        </div>
    );
};

export default Form;