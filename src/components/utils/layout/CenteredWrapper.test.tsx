import React from 'react';
import { render } from '@testing-library/react';
import CenteredWrapper from './CenteredWrapper';

describe('CenteredWrapper', () => {
  it('renders correctly with dark mode', () => {
    const { container } = render(<CenteredWrapper $isDarkMode={true} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly with light mode', () => {
    const { container } = render(<CenteredWrapper $isDarkMode={false} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
