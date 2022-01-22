import React,{useContext, useState} from 'react';
import {Link , NavLink} from "react-router-dom";
import {CustomContext} from "../../Context";

const Header = () => {
    const {count, removeUser} = useContext(CustomContext);
    const [burger,setBurger] = useState(false)
    return (
        <header>
            <nav>
                <div className="nav-wrapper">

                        <Link className='logo' to="/" >Brand Shop</Link>


                    <ul id="nav-mobile" className={`header-list right ${burger ? 'active' : ''}`}>
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

                    <div className={`burger ${burger ? 'active' : ''}`} onClick={() => setBurger(!burger) }>
                        <span className="burger__line"></span>
                    </div>

                </div>
            </nav>
        </header>
    );
};

export default Header;