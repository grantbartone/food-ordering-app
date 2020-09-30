import React from 'react'
import './styles.css'
import dollarAmount from '../../common.js'

export default function Menu({ menu, cart, handleRemoveItem, handleAddItem }) {
    return (
        <div>
            <h1>Menu</h1>
            <div className="Menu">
                {menu.map((menuItem, idx) => (
                    <div className="MenuItem" key={idx}>
                        <div className="ItemLeft">
                            <div className="ItemName">{menuItem.item}</div>
                            <div className="ItemSize">Size: {menuItem.size}</div>
                            <div>Price: {dollarAmount(menuItem.price)}</div>
                            <div className="toggle">
                                <div>
                                    <button
                                        onClick={() => handleRemoveItem(idx)}
                                        disabled={cart[idx] === 0}>-</button>
                                </div>
                                <div>{cart[idx]}</div>
                                <div><button onClick={() => handleAddItem(idx)}>+</button></div>
                            </div>
                        </div>
                        <div className="ItemRight">image</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
