import React from 'react';
import styled from 'styled-components';
import { ReactComponent as FilmIcon } from '../../assets/icons/film.svg';
import { ColorOverlay } from './ColorOverlay';

const OuterImgWrapper = styled.div<{ width: string }>`
  width: ${props => props.width};
`;

const ImgWrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
  padding-bottom: 150%;
  border-radius: 15px;
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

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  svg {
    vertical-align: top;
  }
`;

interface Props {
  src: string;
  width: string;
}

export const Poster: React.FC<Props> = props => (
  <OuterImgWrapper width={props.width}>
    <ImgWrapper>
      {props.src ? (
        <Img src={props.src} />
      ) : (
        <IconWrapper>
          <FilmIcon />
        </IconWrapper>
      )}
      <ColorOverlay />
    </ImgWrapper>
  </OuterImgWrapper>
);
