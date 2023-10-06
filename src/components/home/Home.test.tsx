import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Home from './Home';
import '@testing-library/jest-dom/extend-expect';

jest.mock('react-router-dom', () => {
  return {
    Link: jest.fn(({ children }) => children),
  };
});

describe('Home', () => {
  it('renders correctly', () => {
    const { container, getByText } = render(<Home />);

    expect(getByText('POKEMONS')).toBeInTheDocument();

    const iframe = container.querySelector('iframe');
    expect(iframe).not.toBeNull();

    expect(iframe).toHaveAttribute(
      'src',
      'https://giphy.com/embed/GltC4HZLjJLvq'
    );
    expect(iframe).toHaveAttribute('width', '300px');
    expect(iframe).toHaveAttribute('height', '171.42857142857142px');
    expect(iframe).toHaveAttribute('frameBorder', '0');
    expect(iframe).toHaveAttribute('class', 'giphy-embed');
    expect(iframe).toHaveAttribute('allowFullScreen');
    expect(iframe).toHaveAttribute('title', 'Embedded Giphy');
  });
  it('increases iframe width over time', async () => {
    const { container } = render(<Home />);

    await waitFor(() => {
      const iframe = container.querySelector('iframe');
      expect(iframe).toHaveAttribute('width', '310px');
    });
  });
});
