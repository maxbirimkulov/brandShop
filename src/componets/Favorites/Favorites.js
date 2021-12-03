import React from 'react';
import Card from "../Card/Card";

const Favorites = ({shoes, setShoes}) => {
    return (
        <Card  setShoes={setShoes}  shoes={shoes} shoesForCard={shoes.filter((item)=> item.favorite)}/>
    );
};

export default Favorites;