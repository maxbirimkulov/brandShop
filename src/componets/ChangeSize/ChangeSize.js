import React from 'react';

const ChangeSize = ({item, shoes, setShoes}) => {

    const changeDefaultSize = (id, size) => {
        setShoes(shoes.map((item)=>{
            if (id === item.id){
                return {...item, defaultSize : size}
            } else {
                return item
            }
        }))
    };

    return (
        <>
            <p className='home__card-brand'><b>Gender</b>: {item.gender}</p>
            <p className='home__card-brand home__card-color'><b>ColorWay</b>: {item.colorway}</p>
            <div className='home__card-brand home__card-price home__card-size'>
                <b>Select size :</b>
                <select defaultValue={item.defaultSize} onChange={(e)=> changeDefaultSize(item.id , e.target.value)}>
                    {item.size.map((el)=>{
                        return (
                            <option key={el} value={el}>{el}</option>
                        )
                    })}
                </select>
            </div>
            <p className='home__card-brand home__card-price'><b>Price</b>: {item.retailPrice} $</p>
            </>

    );
};

export default ChangeSize;