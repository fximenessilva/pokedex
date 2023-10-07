import React from 'react';
import { render } from '@testing-library/react';
import Wrapper from './Wrapper';
import '@testing-library/jest-dom/extend-expect';

Wrapper.displayName = 'Wrapper';

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

    expect(getByText('Children content')).toBeInTheDocument();
  });
});
