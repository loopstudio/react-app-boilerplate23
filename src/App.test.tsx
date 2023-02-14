import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home screen title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to home screen/i);
  expect(linkElement).toBeInTheDocument();
});
