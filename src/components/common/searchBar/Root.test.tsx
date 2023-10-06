import React from 'react';
import { render } from '@testing-library/react';
import Root from './Root';
import '@testing-library/jest-dom/extend-expect';

describe('Root', () => {
  it('renders children correctly', () => {
    const ChildComponent = () => <div>Child Component</div>;

    const { getByText } = render(
      <Root>
        <ChildComponent />
      </Root>
    );

    expect(getByText('Child Component')).toBeInTheDocument();
  });
});
