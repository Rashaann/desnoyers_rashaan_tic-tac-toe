import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Tic-Tac-Toe title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to the TP/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders next player', () => {
  render(<App />);
  const linkElement = screen.getByText(/Next player/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders go to game start', () => {
  render(<App />);
  const linkElement = screen.getByText(/Reload game/i);
  expect(linkElement).toBeInTheDocument();
});
