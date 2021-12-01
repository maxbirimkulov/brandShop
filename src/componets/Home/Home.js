import React from 'react';
import Card from "../Card/Card";

const Home = ({shoes ,setShoes }) => {
    return (
        <Card shoes={shoes} setShoes={setShoes} />
    );
};

export default Home;