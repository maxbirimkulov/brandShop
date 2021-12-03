import React from 'react';

import Card from "../Card/Card";

const Women = ({shoes, setShoes}) => {
    return (
        <Card setShoes={setShoes} shoes={shoes}
              shoesForCard={shoes.filter((item) => item.gender === 'women' || item.gender === 'unisex')}/>
    );
};

export default Women;