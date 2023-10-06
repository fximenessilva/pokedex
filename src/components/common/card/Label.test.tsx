import React from 'react';
import { render } from '@testing-library/react';
import Label from './Label'; // Adjust the import path as needed
import '@testing-library/jest-dom/extend-expect';

describe('Label Component', () => {
  it('should render a label with the provided name', () => {
    const name = 'Pikachu';

    const { getByText } = render(<Label name={name} />);

    // Use getByText to find the label element by its text content
    const labelElement = getByText(name);

    // Check if the label element exists and contains the provided name
    expect(labelElement).toBeInTheDocument();
  });
});
