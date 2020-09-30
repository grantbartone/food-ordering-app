import React, { useState, useEffect } from 'react';
import './App.css';
import Menu from './components/Menu'
import Cart from './components/Cart'

function App() {
  const [ menu, setMenu ] = useState([])
  const [ cart, setCart ] = useState([])

  useEffect(() => {
    const getMenuData = async () => {
      let data = {
        "meta": {
          "version": 1.2,
          "date": "2017-04-20"
        },
        "menu": [
          {
            "item": "Burger",
            "options": [
              {
                "size": "regular",
                "price": 3
              }
            ]
          },
          {
            "item": "Soda",
            "options": [
              {
                "size": "small",
                "price": 0.99
              },
              {
                "size": "regular",
                "price": 1.5
              },
              {
                "size": "large",
                "price": 2
              },
              {
                "size": "too large",
                "price": 3.5
              }
            ]
          },
          {
            "item": "Fries",
            "options": [
              {
                "size": "small",
                "price": 0.99
              },
              {
                "size": "regular",
                "price": 1.5
              },
              {
                "size": "large",
                "price": 1.99
              }
            ]
          }
        ]
      }

      /* TODO: Fix fetch issue to get the data from remote
      const url = 'https://mobile-dev-code-project.s3-us-west-2.amazonaws.com/project.json'
      const response = await fetch(url, { mode: 'no-cors' })
      const data = response.json()
      */

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
