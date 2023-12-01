import React, { useContext } from 'react'
import './Card.css'
import { BasketContext } from '../../Context/BasketContext'
export default function Cards({ product }) {
    const { basket, setBasket } = useContext(BasketContext)
    const addToBasket = (product) => {
        let basketItem = basket.find((item) => item.id === product.id);
    
        if (!basketItem) {
            let newBasket = [...basket, product];
            setBasket(newBasket);
        }
    };

    return (
        <div className='card'>
            <div className='img'>
                <img src={product.image} alt="" />
            </div>
            <div className='titleFlexx'>
            <h2 className='title'>{product.title}</h2>
            </div>
            <div className="priceParent">
                <p className='price'>Price:{product.price}$</p>
                <i onClick={() => {
                addToBasket(product)
            }} className="fa-solid fa-cart-shopping"></i>
            </div>
           
        </div>

    )
}
