import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import { ROUTES, POKEBALL_URL } from '../../../utils/constants';

const float = keyframes`
  0% {
    transform: translate(3px, 0);
  }
  25% {
    transform: translate(3px, 3px);
  }
  50% {
    transform: translate(0, 0);
  }
  75% {
    transform: translate(-3px, 0);
  }
  100% {
    transform: translate(3px,0);
  }
`;

const FloatingFavoriteLink = styled.div`
  position: fixed;
  bottom: 20px; /* Adjust this value to control the distance from the bottom */
  right: 20px; /* Adjust this value to control the distance from the right */
  z-index: 999; /* Adjust this value to control the stacking order */
  animation: ${float} 10s ease infinite; /* Apply the floating animation */
`;

const FavoriteLink = () => {
  return (
    <FloatingFavoriteLink>
      <Link to={ROUTES.pokemons_favorites}>
        <PokeballImage />
      </Link>
    </FloatingFavoriteLink>
  );
};

const PokeballImage = () => {
  const svgCode = `
 <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1324.2 1318.92"><defs><style>.cls-1{fill:#383838;}.cls-2{fill:#ee3f3e;}.cls-3{fill:#fdfcfc;}.cls-4{fill:#fff;}</style></defs><title>3</title><path class="cls-1" d="M803.3,109.43c5.51,1.25,11.15.8,16.72,1.14q33.21,2.09,66,7.37a644.69,644.69,0,0,1,90.86,21.31A663.14,663.14,0,0,1,1424,618.05a651.3,651.3,0,0,1,15,90.54c1.9,20.22,3.38,40.5,2.81,60.81-.68,23.92-1.81,47.81-4.48,71.63a659.21,659.21,0,0,1-176.67,380,658.77,658.77,0,0,1-224.36,155.68,645.56,645.56,0,0,1-125.58,38.68A659.24,659.24,0,0,1,822,1427a673.91,673.91,0,0,1-90-.31,659.33,659.33,0,0,1-382.35-157.16Q218,1156.34,157.8,993.51a636.93,636.93,0,0,1-32.59-127.7c-6.29-42.44-8.93-85.12-6.69-128A662.25,662.25,0,0,1,641.31,124a676.56,676.56,0,0,1,92.23-13c7.05-.51,14.11-.68,21.16-1a26.47,26.47,0,0,0,2.9-.46Z" transform="translate(-117.73 -109.43)"/><path class="cls-2" d="M1183.84,708.21q-107.64,0-215.26,0c-2.31,0-3.58-.35-4.61-2.86-25.48-61.87-70.43-101.56-136-115.61-55.94-12-107.15.65-152.53,35.49-27.1,20.82-46.66,47.52-58.95,79.46-1,2.63-2.2,3.56-5.15,3.56q-224.7-.13-449.4-.08c-5,0-5,0-4.51-4.94a575.62,575.62,0,0,1,12.84-75.74A626.83,626.83,0,0,1,660.54,156.61c19.12-3.73,38.41-6.39,57.81-8.25a620,620,0,0,1,68.39-3A670,670,0,0,1,854,149.71,615,615,0,0,1,984.6,179.59a627.82,627.82,0,0,1,382,372.81,613.51,613.51,0,0,1,30.74,114.47c2.09,12.58,3.46,25.29,5.35,37.91.5,3.32-1,3.48-3.58,3.48Q1291.46,708.17,1183.84,708.21Z" transform="translate(-117.73 -109.43)"/><path class="cls-3" d="M390.83,850.62q113.76,0,227.51-.07c2.43,0,3.63.68,4.67,2.85A186.36,186.36,0,0,0,792.48,957.87c38.46-.8,73.61-12,105.09-34.32A184.83,184.83,0,0,0,957.45,853a3.61,3.61,0,0,1,3.87-2.43q217.9.07,435.83,0c4,0,2.62,1.8,2.36,4-1.59,13.45-4,26.76-6.8,40a630.78,630.78,0,0,1-23.57,83.26,623.08,623.08,0,0,1-87.93,163.53,616.51,616.51,0,0,1-72.85,81.49,625.3,625.3,0,0,1-165.72,112,617.25,617.25,0,0,1-122.12,41.81c-15.62,3.57-31.32,6.7-47.15,9.07-11.91,1.78-23.9,3-35.9,4.2-24.73,2.52-49.52,2.87-74.32,2.48-13.54-.21-27-1.2-40.55-2.42-10.71-1-21.41-2.06-32-3.58A624,624,0,0,1,386.86,1254,623.85,623.85,0,0,1,313,1183.93c-56.14-63.08-98.3-134.38-125.71-214.31a595.45,595.45,0,0,1-22-82c-2.12-11.15-3.8-22.37-5.83-33.53-.48-2.59.19-3.5,3.14-3.5Q276.74,850.69,390.83,850.62Z" transform="translate(-117.73 -109.43)"/><path class="cls-4" d="M789.8,620.78c84.38.39,151.66,68.08,151.17,151.92a150.91,150.91,0,0,1-301.81-1.15C639.32,687.32,707.17,621.37,789.8,620.78Z" transform="translate(-117.73 -109.43)"/></svg>
    `;

  const dataUrl = `data:image/svg+xml;base64,${btoa(svgCode)}`;

  return (
    <div>
      <img src={dataUrl} alt='Pokeball' width='75' height='75' />
    </div>
  );
};

export default FavoriteLink;
