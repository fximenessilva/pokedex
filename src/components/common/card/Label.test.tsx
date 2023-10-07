import React from 'react';
import { render } from '@testing-library/react';
import Label from './Label';
import '@testing-library/jest-dom/extend-expect';

describe('Label Component', () => {
  it('should render a label with the provided name', () => {
    const name = 'Pikachu';

    const { getByText } = render(<Label name={name} />);

    const labelElement = getByText(name);

    expect(labelElement).toBeInTheDocument();
  });
});
