import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookSquare, faInstagram, faWhatsapp, faTelegram} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className='footer__row'>
                    <div className='footer__col'>
                        <h2 className='footer__logo'>Brand shop</h2>
                        <div className='footer__icons-block'>
                            <a className='footer__icons' href="">
                                <FontAwesomeIcon icon={faFacebookSquare}/>
                            </a>
                            <a className='footer__icons' href="">
                                <FontAwesomeIcon icon={faInstagram}/>
                            </a>
                            <a className='footer__icons' href="">
                                <FontAwesomeIcon icon={faWhatsapp}/>
                            </a>
                            <a className='footer__icons' href="">
                                <FontAwesomeIcon icon={faTelegram}/>
                            </a>
                        </div>
                    </div>
                    <div className='footer__col'>
                        <h3 className='footer__contact'>Контакты</h3>
                        <div className='footer__contact-block'>
                           <p className='footer__contact-text'>пр.Чуй 127, ТЦ 1000 Мелочей</p>
                           <p className='footer__contact-text'>0 553 63 88 88</p>
                        </div>
                        <div className='footer__contact-block'>
                           <p className='footer__contact-text'> ул. Байтик Баатыра, 43</p>
                           <p className='footer__contact-text'> 0 554 53 88 88</p>
                        </div>
                    </div>
                    <div className='footer__col'></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;