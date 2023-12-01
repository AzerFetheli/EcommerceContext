import React, { useContext } from 'react'
import { BasketContext } from '../../Context/BasketContext';

export default function ({little}) {
    console.log(little)
    const { removeFromBasket } = useContext(BasketContext);

    const handleRemoveFromCart = () => {
        removeFromBasket(little.id); 
    };
    return (
        <div className='basketDiv'>
            <img src={little.image} alt="" />
            <h1>{little.title}</h1>
            <p>{little.price}$</p>
            <button onClick={handleRemoveFromCart}>x</button>
        </div>
    )
}
