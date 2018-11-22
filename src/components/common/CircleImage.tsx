import React from 'react';
import styled from 'styled-components';
import { ColorOverlay } from './ColorOverlay';

const OuterImgWrapper = styled.div<{ width: string }>`
  width: ${props => props.width};
`;

const ImgWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  padding-bottom: 100%;
  border-radius: 50%;
  overflow: hidden;
`;

const Img = styled.img`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;

interface Props {
  src: string;
  width: string;
}

export const CircleImage: React.FC<Props> = props => (
  <OuterImgWrapper width={props.width}>
    <ImgWrapper>
      <Img src={props.src} />
      <ColorOverlay />
    </ImgWrapper>
  </OuterImgWrapper>
);
