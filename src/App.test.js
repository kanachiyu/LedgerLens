// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders LedgerLens title', () => {
    render(<App />);
    const titleElement = screen.getByText(/LedgerLens/i);
    expect(titleElement).toBeInTheDocument();
});
