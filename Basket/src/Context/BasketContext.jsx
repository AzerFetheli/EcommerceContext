import { createContext, useEffect, useState } from "react";

export const BasketContext = createContext()

export const BasketProvider = ({ children }) => {
    const [basket, setBasket] = useState([])
    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("basket"));
        if (data) {
            setBasket(data);
        }
    }, []);

    useEffect(() => {
        let addLocalBasket = basket.map(({ id, image, title, price }) => ({
            id,
            image,
            title,
            price,
        }));
        localStorage.setItem("basket", JSON.stringify(addLocalBasket));
    }, [basket]);
    const removeFromBasket = (id) => {
        const updatedBasket = basket.filter(item => item.id !== id);
        setBasket(updatedBasket);
        updateLocalStorage(updatedBasket);
    };

    const updateLocalStorage = (updatedBasket) => {
        localStorage.setItem("basket", JSON.stringify(updatedBasket));
    };
    return (<BasketContext.Provider value={{ basket, setBasket,removeFromBasket, }}>{children}</BasketContext.Provider>
    )
}
