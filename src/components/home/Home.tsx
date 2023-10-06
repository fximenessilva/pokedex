import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { COLORS } from '../../utlils/constants';

const centeredPosition = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.9;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // height: 100vh;
  overflow: hidden;
`;

const Title = styled.h1`
  color: ${COLORS.dark_gray};
  font-size: 10vw;
  ${centeredPosition};
  z-index: 0;
`;

const IframeContainer = styled.div`
  position: relative;
  pointer-events: none;
  ${centeredPosition};
  z-index: 1;
`;

const Home = () => {
  const [iframeWidth, setIframeWidth] = useState(300);

  useEffect(() => {
    const interval = setInterval(() => {
      setIframeWidth((prevWidth) => prevWidth + 10);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Link to='/pokemons'>
        <Title>POKEMONS</Title>
        <IframeContainer>
          <iframe
            src='https://giphy.com/embed/GltC4HZLjJLvq'
            width={`${iframeWidth}px`}
            height={`${iframeWidth / 1.75}px`}
            frameBorder='0'
            className='giphy-embed'
            allowFullScreen
            title='Embedded Giphy'
          ></iframe>
        </IframeContainer>
      </Link>
    </Container>
  );
};

export default Home;
