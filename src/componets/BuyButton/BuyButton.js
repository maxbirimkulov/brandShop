import React,{useContext} from 'react';
import {CustomContext} from "../../Context";

const BuyButton = ({item ,shoes, count}) => {
    const {addCart} = useContext(CustomContext);
    return (
        <button className='card__btn' type='button' onClick={()=> addCart(item.id, shoes, item.defaultSize, count)}>Buy</button>
    );
};

export default BuyButton;