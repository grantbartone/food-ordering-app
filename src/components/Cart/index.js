import React from 'react'
import './styles.css'

export default function Cart({ menu, cart, handleRemoveAll }) {
    const dollarAmount = (int) => {
        return int.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }

    const subTotalAmount = cart
        .map((qty, idx) => menu[idx].price * qty)
        .reduce((acc, curr) => acc + curr, 0)

    return (
        <div className="Cart">
            {menu.map((item, idx) => {
                return cart[idx] > 0 && (
                    <div className="CartItem" key={idx}>
                        <div className="quantity">{cart[idx]}</div>
                        <div className="name">{item.item}</div>
                        <div className="size">{item.size}</div>
                        <div className="price">{dollarAmount(item.price)}</div>
                        <button
                            onClick={() => handleRemoveAll(idx)}
                            className="remove">Remove</button>
                    </div>
                )
            })}
            <div className="Subtotal">
                <div>Subtotal</div>
                <div>{dollarAmount(subTotalAmount)}</div>
            </div>
        </div>
    )
}
