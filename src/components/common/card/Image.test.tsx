import React from 'react';
import { render } from '@testing-library/react';
import Image from './Image'; // Adjust the import path as needed
import '@testing-library/jest-dom/extend-expect';

describe('Image Component', () => {
  it('should render an image with the provided src', () => {
    const src = 'example-image-url.jpg';

    const { getByAltText } = render(<Image src={src} />);

    // Use getByAltText to find the image element by its alt text
    const imageElement = getByAltText('pokemon');

    // Check if the image element exists and has the correct src attribute
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', src);
  });
});
