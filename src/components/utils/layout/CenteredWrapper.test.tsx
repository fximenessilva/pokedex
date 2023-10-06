import React from 'react';
import { render } from '@testing-library/react';
import CenteredWrapper from './CenteredWrapper';

describe('CenteredWrapper', () => {
  it('renders correctly with dark mode', () => {
    const { container } = render(<CenteredWrapper $isDarkMode={true} />);

    // Assert that the rendered component matches the snapshot
    expect(container.firstChild).toMatchSnapshot();

    // You can add more assertions as needed to check styles or elements
    // For example, you can check the background color:
    // expect(container.firstChild).toHaveStyle('background-color: #424B54');
  });

  it('renders correctly with light mode', () => {
    const { container } = render(<CenteredWrapper $isDarkMode={false} />);

    // Assert that the rendered component matches the snapshot
    expect(container.firstChild).toMatchSnapshot();

    // You can add more assertions as needed to check styles or elements
    // For example, you can check the background color:
    // expect(container.firstChild).toHaveStyle('background-color: #E5ECF3');
  });
});
