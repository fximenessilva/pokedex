import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';
import '@testing-library/jest-dom/extend-expect';

describe('ErrorBoundary', () => {
  const originalConsoleError = console.error;
  beforeAll(() => {
    console.error = jest.fn();
  });
  afterAll(() => {
    console.error = originalConsoleError;
  });

  it('renders children when there is no error', () => {
    const { getByText } = render(
      <ErrorBoundary>
        <div>Children content</div>
      </ErrorBoundary>
    );

    // Ensure that the children content is rendered
    expect(getByText('Children content')).toBeInTheDocument();
  });
});
