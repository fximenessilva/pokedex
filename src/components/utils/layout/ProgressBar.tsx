import React, { useEffect, useState, FC } from 'react';
import styled from 'styled-components';

import { COLORS } from '../../../utlils/constants';

const ProgressBarContainer = styled.div<{ $isDarkMode: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: ${(props) =>
    props.$isDarkMode ? COLORS.darkest_gray : COLORS.light_gray};
  z-index: 10;
`;

interface ProgressBarProps {
  $scrollPercentage: number;
  $isDarkMode: boolean;
}

const ProgressBar = styled.div<ProgressBarProps>`
  width: ${(props) => props.$scrollPercentage}%;
  height: 100%;
  background-color: ${(props) =>
    props.$isDarkMode ? COLORS.yellow : COLORS.blue};
  transition: width 0.3s ease;
  border-radius: 50px;
`;

interface ScrollProgressBarProps {
  isDarkMode: boolean;
}

const ScrollProgressBar: FC<ScrollProgressBarProps> = ({ isDarkMode }) => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      const percentageScrolled =
        (scrollPosition / (documentHeight - windowHeight)) * 100;
      setScrollPercentage(percentageScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ProgressBarContainer $isDarkMode={isDarkMode}>
      <ProgressBar
        $scrollPercentage={scrollPercentage}
        $isDarkMode={isDarkMode}
      ></ProgressBar>
    </ProgressBarContainer>
  );
};

export default ScrollProgressBar;
