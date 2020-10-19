import React from 'react'
import './styles.css'
import dollarAmount from '../../common.js'

export default function Cart({ menu, cart, handleRemoveAll }) {
    const subTotalAmount = cart
        .map((qty, idx) => menu[idx].price * qty)
        .reduce((acc, curr) => acc + curr, 0)

    return (
        <div className="Cart">
            {menu.map((item, idx) => {
                return cart[idx] > 0 && (
                    <div className="CartItem" key={idx} data-testid="cart-item">
                        <div className="quantity">{cart[idx]}</div>
                        <div>
                            <div><label className="bold">{item.item}</label> - {item.size}</div>
                            <div>{dollarAmount(item.price)}</div>
                            <button
                                onClick={() => handleRemoveAll(idx)}
                                className="remove">Remove</button>
                        </div>
                    </div>
                )
            })}
            <div className="Subtotal">
                <label className="bold">Subtotal</label>
                <div data-testid="subtotal">{dollarAmount(subTotalAmount)}</div>
            </div>
        </div>
    )
}
