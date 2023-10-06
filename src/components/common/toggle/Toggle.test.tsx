import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ToggleButton from './Toggle';
import { COLORS } from '../../../utlils/constants';
import '@testing-library/jest-dom/extend-expect';

describe('ToggleButton', () => {
  it('renders correctly with the default active state', () => {
    const { container } = render(
      <ToggleButton
        onClick={() => {
          //placeholder comment
        }}
        defaultValue={true}
      />
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly with the default inactive state', () => {
    const { container } = render(
      <ToggleButton
        onClick={() => {
          //placeholder comment
        }}
        defaultValue={false}
      />
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('calls the onClick callback when clicked', () => {
    const onClickMock = jest.fn();

    const { getByTestId } = render(
      <ToggleButton onClick={onClickMock} defaultValue={true} />
    );

    const toggleButton = getByTestId('toggle-button');

    fireEvent.click(toggleButton);

    expect(onClickMock).toHaveBeenCalledWith(false);
  });
});
