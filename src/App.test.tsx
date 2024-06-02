import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { expect, test} from '@jest/globals'
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello, World!/i);
  expect(linkElement);
});
