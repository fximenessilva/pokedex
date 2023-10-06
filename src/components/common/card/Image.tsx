import React, { FC } from 'react';
import styled from 'styled-components';

interface ImageProps {
  src: string;
}

const StyledImage = styled.img.attrs((props) => ({
  src: props.src,
}))`
  min-height: 80px;
`;

const Image: FC<ImageProps> = ({ src }) => {
  return <StyledImage alt='pokemon' src={src} />;
};

export default Image;
