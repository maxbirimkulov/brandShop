import React, {useState, useContext} from 'react';
import {CustomContext} from "../../Context";
import notImage from "../../assets/notImage.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {faHeart} from '@fortawesome/free-regular-svg-icons'
import images from '../../assets/notfound.jpg'
import {Link} from 'react-router-dom'
import ChangeSize from "../ChangeSize/ChangeSize";
import BuyButton from "../BuyButton/BuyButton";
import Full from "../Hearts/Hearts";
import Pagination from "./Pagination";

const Card = ({shoes, setShoes,shoesForCard}) => {
    const [search, setSearch] = useState('');
    const {addFavorite} = useContext(CustomContext);
    const [countCard] = useState(9);
    const [pageNumber, setPageNumber] = useState(1);

    const lastIdxCard = countCard  * pageNumber;
    const firstIdx = lastIdxCard - countCard;
    const showPage = shoesForCard.slice(firstIdx, lastIdxCard);


    const favoriteHandler = (id) => {
        setShoes(shoes.map((item, idx) => {
            if (item.id === id) {
                return {...item, favorite: !item.favorite}
            } else {
                return item
            }
        }));

        addFavorite(shoes.map((item, idx) => {
            if (item.id === id) {
                return {...item, favorite: !item.favorite}
            } else {
                return item
            }
        }).filter((item, idx) => {
            return item.favorite
        }))
    };
    return (
        <section className='home'>
            <div className="container">
                <div className="row">
                    <div className="input-field col s12 card__input">
                        <input id="search" type="search" className="validate"
                               onChange={(e) => setSearch(e.target.value)}/>
                        <label htmlFor="search">Search</label>
                        <div className='card__search'>
                            <FontAwesomeIcon icon={faSearch}/>
                        </div>

                    </div>
                </div>
                {shoes.filter(item => item.title.toUpperCase().includes(search.toUpperCase())).length === 0
                    ? <>
                        <h2 className='card__notfound-title'>No result found for this request.</h2>
                        <img className='card__notfound-img' src={images} alt="not found"/>
                    </>
                    : ''}

                <div className="row">
                    {showPage.filter((item) => {
                        return item.title.toUpperCase().includes(search.toUpperCase())
                    }).map((item) => {
                        return (
                            <div className="col s12 m6 l4" key={item.id}>
                                <div className="card">
                                    <div className="card-image">
                                        <img className='home__card-image'
                                             src={item.media.thumbUrl === null ? notImage : item.media.thumbUrl}
                                             alt='shoes image'/>
                                    </div>
                                    <div className="card-content">
                                        <h3 className='home__card-title'>{item.shoe.length < 40 ? item.shoe : item.shoe.slice(0, 39)}</h3>
                                        <p className='home__card-brand'><b>Brand </b>: {item.brand} {item.year}</p>
                                        <ChangeSize item={item} shoes={shoes} setShoes={setShoes}/>
                                    </div>
                                    <div className="card-action">
                                        <Link to={`/shoes/${item.id}`}>Learn more</Link>
                                        <BuyButton item={item} shoes={shoes} count={1}/>
                                    </div>
                                    <div className='card-like' onClick={() => favoriteHandler(item.id)}>
                                        {item.favorite ? <Full/> : <FontAwesomeIcon icon={faHeart}/>}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} shoesForCard={shoesForCard} countCard={countCard}/>
            </div>
        </section>
    );
};

export default Card;