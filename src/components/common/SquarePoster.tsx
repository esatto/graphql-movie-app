import React from 'react';
import styled from 'styled-components';
import { ColorOverlay } from './ColorOverlay';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  vertical-align: middle;
  object-fit: cover;
  object-position: top center;
`;

export const SquarePoster: React.FC<{ src: string }> = props => (
  <Wrapper>
    <Img src={props.src} />
    <ColorOverlay />
  </Wrapper>
);
