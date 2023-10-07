import React from 'react';
import { render } from '@testing-library/react';
import { Grid, GridItem } from './Grid';
import '@testing-library/jest-dom/extend-expect';

describe('Grid', () => {
  it('renders children', () => {
    const { getByText } = render(
      <Grid>
        <GridItem>Item 1</GridItem>
        <GridItem>Item 2</GridItem>
      </Grid>
    );

    expect(getByText('Item 1')).toBeInTheDocument();
    expect(getByText('Item 2')).toBeInTheDocument();
  });
});
