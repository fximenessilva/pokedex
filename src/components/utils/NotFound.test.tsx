import React from 'react';
import { render } from '@testing-library/react';
import NotFound from './NotFound';
import '@testing-library/jest-dom/extend-expect';

describe('NotFound', () => {
  it('renders the "Not found page" text', () => {
    const { getByText } = render(<NotFound />);

    // Ensure that the "Not found page" text is rendered
    expect(getByText('Not found page')).toBeInTheDocument();
  });
});
