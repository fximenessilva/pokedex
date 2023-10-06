import React from 'react';
import styled from 'styled-components';

import { useAppContext } from '../../../contexts/AppContext';

type LoaderWrapperProps = {
  $isDarkMode: boolean;
};

const LoaderWrapper = styled.span<LoaderWrapperProps>`
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;

  &::after,
  &::before {
    content: '';
    box-sizing: border-box;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 2px solid ${(props) => (props.$isDarkMode ? '#fff' : '#000')};
    position: absolute;
    left: 0;
    top: 0;
    animation: animloader 2s linear infinite;
  }

  &::after {
    animation-delay: 1s;
  }

  @keyframes animloader {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`;

const Loading = () => {
  const {
    state: { isDarkMode },
  } = useAppContext();

  return <LoaderWrapper $isDarkMode={isDarkMode} />;
};

export default Loading;
