import React, {useContext} from 'react';
import {CustomContext} from "../../Context";
import images from '../../assets/cart.png'

const Cart = () => {
    const {user, plusCountCart, minusCountCart} = useContext(CustomContext);

    return (
        <div className='container'>
            {user.cart.length === 0
                ? <>
                    <h2 className='cart__title'>Cart is empty</h2>
                    <img className='cart__img' src={images} alt="Cart is empty"/>
                     </>
                : <>
                    <table className='centered'>
                        <thead>
                        <tr>
                            <th>Shoes Name</th>
                            <th>Shoes Size</th>
                            <th>Shoes Count</th>
                            <th>Action</th>
                            <th>Shoes Price</th>

                        </tr>
                        </thead>

                        <tbody>
                        {user.cart.map((item, idx) => {
                            return (
                                <tr key={`${item.shoe[0].id}${item.shoe[0].defaultSize}`}>
                                    <td>{item.shoe[0].shoe}</td>
                                    <td>{item.shoe[0].defaultSize}</td>
                                    <td>{item.count}</td>
                                    <td className='cart__buttons-row'>
                                        <button type='button' className='cart__button-plus'
                                                onClick={() => plusCountCart(item.shoe[0].id, item.shoe[0].defaultSize)}>+
                                        </button>
                                        <button type='button' className='cart__button-minus'
                                                onClick={() => minusCountCart(item.shoe[0].id, item.shoe[0].defaultSize)}>-
                                        </button>
                                    </td>
                                    <td>{item.shoe[0].retailPrice * item.count} $</td>
                                </tr>
                            )
                        })}
                        </tbody>

                    </table>
                    <div className='cart__foot'>
                        <p className='cart_total'>
                            Total price : {user.cart.reduce((acc, rec) => {
                            return acc + rec.count * rec.shoe[0].retailPrice
                        }, 0)} $
                        </p>
                        <button className='cart__pay btn' type='button'>
                            Pay
                        </button>
                    </div>
                </>
            }


        </div>
    );
};

export default Cart;