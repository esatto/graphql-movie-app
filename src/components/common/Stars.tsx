import React from 'react';
import styled from 'styled-components';
import { Star } from './Star';

const NUMBER_OF_STARS = 5;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 1.5rem;
  margin-bottom: 0.5rem;
  position: relative;
`;

interface Props {
  color?: string;
  rating: number;
}

export const Stars: React.FC<Props> = ({ rating, color }) => {
  const active = Math.round((rating / 10) * NUMBER_OF_STARS);
  const inactive = NUMBER_OF_STARS - active;

  const activeStars = [...new Array(active)];
  const inactiveStars = [...new Array(inactive)];

  return (
    <Wrapper>
      {activeStars.map((_, i) => (
        <Star active key={i} color={color} />
      ))}
      {inactiveStars.map((_, i) => (
        <Star key={i} color={color} />
      ))}
    </Wrapper>
  );
};
