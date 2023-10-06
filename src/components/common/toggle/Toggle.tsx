import React, { useState } from 'react';
import styled from 'styled-components';

import { COLORS } from '../../../utlils/constants';

const ToggleButtonWrapper = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const Slider = styled.div<{ $isActive: boolean }>`
  width: 30px;
  height: 14px;
  background-color: ${(props) =>
    props.$isActive ? COLORS.green : COLORS.medium_gray};
  border-radius: 25px;
  position: relative;

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: ${(props) => (props.$isActive ? '18px' : '2px')};
    transition: left 0.3s ease-in-out, background-color 0.3s ease-in-out;
  }
`;

interface ToggleButtonProps {
  onClick: (isActive: boolean) => void;
  defaultValue: boolean;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  onClick,
  defaultValue,
}) => {
  const [isActive, setIsActive] = useState(defaultValue);

  const toggle = () => {
    setIsActive(!isActive);
    onClick(!isActive);
  };

  return (
    <ToggleButtonWrapper
      data-testid='toggle-button'
      id='toggle-button'
      onClick={toggle}
    >
      <Slider data-testid='slider' $isActive={isActive} />
    </ToggleButtonWrapper>
  );
};

export default ToggleButton;
