import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Menu header', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Menu/i);
  expect(linkElement).toBeInTheDocument();
});
