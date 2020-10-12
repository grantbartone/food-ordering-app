import React, { useState, useEffect } from 'react';
import './App.css';
import Menu from './components/Menu'
import Cart from './components/Cart'
import data from './data.json'

function App() {
  const [ menu, setMenu ] = useState([])
  const [ cart, setCart ] = useState([])

  useEffect(() => {
    const getMenuData = async () => {

      const menuData = []
      for (const item of data.menu) {
        for (const option of item.options) {
          menuData.push({
            item: item.item,
            size: option.size,
            price: option.price,
          })
        }
      }
      setMenu(menuData)
      setCart(Array(menuData.length).fill(0))
    }
    getMenuData()
  }, [])


  const handleAddItem = (id) => {
    const nextCart = [...cart]
    nextCart[id] += 1
    setCart(nextCart)
  }

  const handleRemoveItem = (id) => {
    const nextCart = [...cart]
    nextCart[id] -= 1
    setCart(nextCart)
  }

  const handleRemoveAll = (id) => {
    const nextCart = [...cart]
    nextCart[id] = 0
    setCart(nextCart)
  }

  return (
    <div className="App">
      <Menu
        menu={menu}
        cart={cart}
        handleRemoveItem={handleRemoveItem}
        handleAddItem={handleAddItem}
      />
      <Cart menu={menu} cart={cart} handleRemoveAll={handleRemoveAll} />
    </div>
  );
}

export default App;
