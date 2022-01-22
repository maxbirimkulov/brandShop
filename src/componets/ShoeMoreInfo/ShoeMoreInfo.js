import React,{useState} from 'react';
import {useParams} from 'react-router-dom'
import notImage from "../../assets/notImageBig.png";
import ChangeSize from "../ChangeSize/ChangeSize";
import BuyButton from "../BuyButton/BuyButton";
import images from "../../assets/notfound.jpg";

const ShoeMoreInfo = ({shoes, setShoes}) => {
    let params = useParams();
    const [count, setCount] = useState('1');
    return (
        <div className='container'>
            {shoes.length === 0
                ? <>
                    <h2 className='card__notfound-title'>No result found for this request.</h2>
                    <img className='card__notfound-img' src={images} alt="not found"/>
                </>
                : ''}
            {shoes.filter((item)=>{
                return item.id === params.id
            }).map((item)=>{
                return (
                    <div key={item.id}>
                        <h2>{item.shoe}</h2>
                        <div className='shoeMore__row'>
                            <div className='shoeMore__col-img'>
                                <img src={item.media.smallImageUrl === null ? notImage : item.media.smallImageUrl} alt=""/>
                            </div>
                            <div className='shoeMore__col-details'>
                                <h3>{item.brand} {item.year}</h3>
                                <ChangeSize item={item} shoes={shoes} setShoes={setShoes}/>
                                <div className='shoeMore__pay'>
                                    <input value={count} type="number" className='shoeMore__number' min='1' max='10'
                                           onChange={(e)=> setCount(e.target.value)}/>
                                    <BuyButton item={item} shoes={shoes} count={+count}/>
                                </div>
                            </div>
                        </div>
                        <h4>Описание</h4>
                        <p className='shoeMore__description'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, consequatur dolores dolorum eveniet inventore maiores minima molestias natus necessitatibus officia, perspiciatis provident quas sapiente tempore veritatis. Accusamus aliquam, assumenda atque, cum dolores doloribus ex expedita explicabo facere illum modi pariatur. A ad aut consequuntur, enim obcaecati quae quod ratione tempora!
                        </p>
                    </div>
                )
            })}
        </div>
    );
};

export default ShoeMoreInfo;