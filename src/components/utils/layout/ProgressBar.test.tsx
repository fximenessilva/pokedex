import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ScrollProgressBar from './ProgressBar';
import '@testing-library/jest-dom/extend-expect';

describe('ScrollProgressBar', () => {
  it('renders the ScrollProgressBar with initial values', () => {
    const { getByTestId } = render(<ScrollProgressBar isDarkMode={false} />);
    const progressBar = getByTestId('progress-bar');

    expect(progressBar).toBeInTheDocument();
  });

  it('removes the scroll event listener when unmounted', () => {
    const { unmount } = render(<ScrollProgressBar isDarkMode={false} />);

    const removeEventListenerMock = jest.spyOn(window, 'removeEventListener');

    unmount();

    expect(removeEventListenerMock).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function)
    );

    removeEventListenerMock.mockRestore();
  });
});
