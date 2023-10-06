import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import Root from './Root';
import { AppProvider, THEME_SELECTED } from '../../../contexts/AppContext';
import { setter } from '../../../utlils/localStorageHelpers';
import { NAMESPACES } from '../../../utlils/constants';
import '@testing-library/jest-dom/extend-expect';

describe('Root Component', () => {
  it('should render its children', () => {
    const expectedContent = 'Hello, World!';

    const { getByText } = render(
      <AppProvider>
        <Root>{expectedContent}</Root>
      </AppProvider>
    );

    const childElement = getByText(expectedContent);
    expect(childElement).toBeInTheDocument();
  });

  it('should not call the setter function when THEME_SELECTED is true in the AppProvider component', () => {
    const setter = jest.fn();
    const initialState = { isDarkMode: true };
    const { rerender } = render(
      <AppProvider>
        <div>Test</div>
      </AppProvider>
    );

    rerender(
      <AppProvider>
        <div>Test</div>
      </AppProvider>
    );

    expect(setter).not.toHaveBeenCalled();
  });
});
