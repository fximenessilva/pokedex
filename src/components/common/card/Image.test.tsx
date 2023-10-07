import React from 'react';
import { render } from '@testing-library/react';
import Image from './Image';
import '@testing-library/jest-dom/extend-expect';

describe('Image Component', () => {
  it('should render an image with the provided src', () => {
    const src = 'example-image-url.jpg';

    const { getByAltText } = render(<Image src={src} />);

    const imageElement = getByAltText('pokemon');

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', src);
  });
});
