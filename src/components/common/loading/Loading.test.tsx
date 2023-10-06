import React from 'react';
import { render } from '@testing-library/react';
import { AppProvider, useAppContext } from '../../../contexts/AppContext';
import Loading from './Loading';

jest.mock('../../../contexts/AppContext', () => {
  const actualModule = jest.requireActual('../../../contexts/AppContext');
  return {
    ...actualModule,
    useAppContext: jest.fn(),
  };
});

describe('Loading', () => {
  beforeEach(() => {
    (useAppContext as jest.Mock).mockReturnValue({
      state: { isDarkMode: true },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with dark mode', () => {
    const { container } = render(
      <AppProvider>
        <Loading />
      </AppProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
    // Add more assertions as needed
  });

  it('renders correctly with light mode', () => {
    (useAppContext as jest.Mock).mockReturnValue({
      state: { isDarkMode: false },
    });

    const { container } = render(
      <AppProvider>
        <Loading />
      </AppProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
