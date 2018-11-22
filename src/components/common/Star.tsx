import React, { HTMLProps } from 'react';
import styled from 'styled-components';
import { ReactComponent as StarIcon } from '../../assets/icons/star.svg';

interface Props {
  active?: boolean;
  color?: string;
}

export const StyledStar = styled.div<Props>`
  flex: 1;
  border-radius: 50%;
  opacity: ${props => (props.active ? 1 : 0.3)};
  transition: opacity 0.25s;

  svg {
    stroke: none;
    fill: ${props => props.color || 'hsla(262, 100%, 50%, 1)'};
    width: 80%;
  }
`;

export const Star: React.FC<Props & HTMLProps<HTMLDivElement>> = ({
  ref,
  as,
  ...props
}) => (
  <StyledStar {...props}>
    <StarIcon />
  </StyledStar>
);
