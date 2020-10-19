import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders Menu header', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /menu/i })).toBeInTheDocument();
});

test('adding/removing from cart updates cart and subtotal', () => {
  render(<App />);
  const menuItems = screen.getAllByTestId('menu-item')
  
  // Expect 8 menu items, no cart items, and $0.00 subtotal
  expect(menuItems.length).toBe(8)
  expect(screen.queryByTestId('cart-item')).toBeNull()
  expect(screen.getByTestId('subtotal').innerHTML).toBe('$0.00')

  // Add 2 Burgers & Regular Soda to cart, expect 2 cart items, $7.50 subtotal
  const addButtons = screen.getAllByRole('button', { name: /\+/i })
  userEvent.click(addButtons[0])
  userEvent.click(addButtons[0])
  userEvent.click(addButtons[2])
  expect(screen.getAllByTestId('cart-item').length).toBe(2)
  expect(screen.getByTestId('subtotal').innerHTML).toBe('$7.50')

  // Remove 1 of 2 Burgers in cart, expect 2 cart items, $4.50 subtotal
  const removeButtons = screen.getAllByRole('button', { name: /\-/i })
  userEvent.click(removeButtons[0])
  expect(screen.getAllByTestId('cart-item').length).toBe(2)
  expect(screen.getByTestId('subtotal').innerHTML).toBe('$4.50')
});