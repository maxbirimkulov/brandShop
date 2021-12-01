import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Outlet, Navigate} from 'react-router-dom'
import {useAuth} from "../../hooks/useAuth";

const Layout = () => {

    const auth = useAuth();
    console.log(auth.isAuth);
    return auth.isAuth
                ? <>
                    <Header/>
                    <Outlet/>
                    <Footer/>
                  </>
                : <Navigate to='/login'/>

};

export default Layout;