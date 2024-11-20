import { render, screen } from '@testing-library/react';
import TechnicalPortfolio from './TechnicalPortfolio';

test('renders learn react link', () => {
  render(<TechnicalPortfolio />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
