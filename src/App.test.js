import { render, screen } from '@testing-library/react';
import App from './App';

test('renders an input text', () => {
  render(<App />);
  const helloWorld = screen.getByRole('textbox', { placeholder: /type word/i });
  expect(helloWorld).toBeInTheDocument();
});

test('renders an button to search', () => {
  render(<App />);
  const helloWorld = screen.getByRole('button', { value: /search/i });
  expect(helloWorld).toBeInTheDocument();
});

test('renders an button to search', () => {
  render(<App />);
  const helloWorld = screen.getByText(/The most recent words searched/i);
  expect(helloWorld).toBeInTheDocument();
});
