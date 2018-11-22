import { Link } from '@reach/router';
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowLeftIcon } from '../../assets/icons/arrow-left.svg';

const StyledLink = styled(Link)`
  position: absolute;
  top: 0.625rem;
  left: 0.625rem;
  width: 2.75rem;
  height: 2.75rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    stroke: #fff;
    width: 2rem;
    height: 2rem;
  }
`;

export const BackButton: React.FC = () => {
  return (
    <StyledLink
      to="/"
      onClick={ev => {
        ev.preventDefault();
        window.history.back();
      }}
    >
      <ArrowLeftIcon />
    </StyledLink>
  );
};
