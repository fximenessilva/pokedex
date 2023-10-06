import React from 'react';
import { render } from '@testing-library/react';
import Wrapper from './Wrapper';
import '@testing-library/jest-dom/extend-expect';

Wrapper.displayName = 'Wrapper';

// Mock the ErrorBoundary component to avoid testing error handling in this specific test
jest.mock(
  './ErrorBoundary',
  () =>
    ({ children }: { children: React.ReactNode }) =>
      <div>{children}</div>
);

describe('Wrapper', () => {
  it('renders children and context providers', () => {
    const { getByText } = render(
      <Wrapper>
        <div>Children content</div>
      </Wrapper>
    );

    // Ensure that the children content is rendered
    expect(getByText('Children content')).toBeInTheDocument();

    // Add assertions to check the presence of context providers if needed
    // For example, you can use getByTestId to find elements specific to the context providers
    // Example: expect(getByTestId('app-provider')).toBeInTheDocument();
    // Example: expect(getByTestId('filter-provider')).toBeInTheDocument();
    // Example: expect(getByTestId('pokemon-provider')).toBeInTheDocument();
  });
});
