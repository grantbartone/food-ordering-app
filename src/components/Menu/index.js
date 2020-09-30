import React from 'react'
import './styles.css'

export default function Menu({ menu, cart, handleRemoveItem, handleAddItem }) {
    const dollarAmount = (int) => {
        return int.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }

    return (
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
    )
}
