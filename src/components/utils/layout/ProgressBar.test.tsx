import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ScrollProgressBar, {
  backgroundColorContainer,
  backgroundColorProgress,
} from './ProgressBar';
import '@testing-library/jest-dom/extend-expect';
import { COLORS } from '../../../utils/constants';

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
  it('should return light_gray color when $isDarkMode is false', () => {
    const result = backgroundColorContainer({ $isDarkMode: false });
    expect(result).toBe(COLORS.light_gray);
  });
  it('should return darkest_gray color when $isDarkMode is true', () => {
    const result = backgroundColorContainer({ $isDarkMode: true });
    expect(result).toBe(COLORS.darkest_gray);
  });
  it('should return COLORS.yellow when $isDarkMode is true', () => {
    const props = { $isDarkMode: true };
    const result = backgroundColorProgress(props);
    expect(result).toBe(COLORS.yellow);
  });
  it('should return COLORS.blue when $isDarkMode is false', () => {
    const props = { $isDarkMode: false };
    const result = backgroundColorProgress(props);
    expect(result).toBe(COLORS.blue);
  });
});
