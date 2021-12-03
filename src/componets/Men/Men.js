import React from 'react';
import Card from "../Card/Card";

const Men = ({shoes, setShoes}) => {
    return (
        <Card setShoes={setShoes}   shoes={shoes} shoesForCard={shoes.filter((item)=> item.gender === 'men' || item.gender === 'unisex')}/>
    );
};

export default Men;