import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ScrollProgressBar from './ProgressBar';
import '@testing-library/jest-dom/extend-expect';

describe('ScrollProgressBar', () => {
  it('renders the ScrollProgressBar with initial values', () => {
    const { getByTestId } = render(<ScrollProgressBar isDarkMode={false} />);
    const progressBar = getByTestId('progress-bar');

    // Check if the ScrollProgressBar container is rendered
    expect(progressBar).toBeInTheDocument();
  });
});
