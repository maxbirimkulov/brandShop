import React,{useContext} from 'react';
import {Link , NavLink} from "react-router-dom";
import {CustomContext} from "../../Context";

const Header = () => {
    const {count, removeUser} = useContext(CustomContext);
    return (
        <header>
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">Brand Shop</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li className='header__link'><NavLink  to="/men">Men</NavLink></li>
                        <li className='header__link'><NavLink  to="/women">Women</NavLink></li>
                        <li className='header__link'><NavLink  to="/child">Child</NavLink></li>
                        <li className='header__link'><NavLink  to="/favorite">Favorites</NavLink></li>
                        <li className='header__link'>
                            <NavLink  to="/cart">Cart</NavLink>
                            <span className='header__cart-count'>
                                {count < 1 ? '' : count > 9 ? '9+' : count}
                            </span>
                        </li>
                        <li className='header__link'>
                            <Link to='/' onClick={()=>{
                                removeUser();
                                localStorage.clear()
                            } }>Log out</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;