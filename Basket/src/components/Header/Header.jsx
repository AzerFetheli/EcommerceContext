import React, { useContext, useState } from 'react'
import './Header.css'
import { BasketContext } from '../../Context/BasketContext'
import LittleCards from '../LittleCards/LittleCards'


export default function Header() {
    const { basket } = useContext(BasketContext)

    const [show, setShow] = useState(false)
    const clickBasket = () => {
        setShow(!show)
    }
    return (
        <>
            <div className={`sideBar ${show ? "active" : ""}`} >
                <button onClick={clickBasket}>x</button>
               <div  className='littleCardParent'>
               {basket.map((bst) => {
                    return <LittleCards key={bst.id} little={bst} />
                })}
               </div>
            </div>

            <div className='headerFlex'>
                <div>Logo</div>
                <div>
                    <form >
                        <input type="text" placeholder='Search' />
                    </form>
                </div>
                <div className='relative'>
                    <i className="fa-solid fa-cart-shopping" onClick={clickBasket}></i>
                    <span>{basket.length}</span>
                </div>
            </div>
        </>

    )
}
