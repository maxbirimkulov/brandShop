import React from 'react';
import Card from "../Card/Card";

const Child = ({shoes, setShoes})=> {
    return (
            <Card setShoes={setShoes}  shoes={shoes.filter((item)=> item.gender === 'child' || item.gender === 'toddler')}/>
    );
};

export default Child;