import React, { useEffect, useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Header from './components/Header/Header'
import { getProducts } from './services/services'


function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts([...res])
      }).catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <div>
      <Header />
      <div className='cardFlex'>
      {products.map((product) => {
        return <Cards key={product.id} product={product} />
      })}
      </div>
    </div>
  )
}

export default App
