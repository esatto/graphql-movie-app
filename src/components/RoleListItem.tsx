import { Link } from '@reach/router';
import React from 'react';
import styled from 'styled-components';
import { CircleImage } from './common/CircleImage';
import { SubTitle } from './common/SubTitle';

const StyledLink = styled(Link)`
  display: block;
  padding: 0.5rem 0;
  text-decoration: none;

  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const MovieInfo = styled.div`
  flex: 1;
  margin-left: 2rem;
`;

const Title = styled.h2`
  font-size: 1rem;
  text-decoration: none;
  color: #000;
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
`;

interface Props {
  role: {
    actor: {
      id: string;
      imageUrl: string;
      name: string;
    };
    roles: string[];
  };
}

export const RoleListItem: React.FC<Props> = ({ role }) => (
  <StyledLink to={`/actor/${role.actor.id}`}>
    <Inner>
      <CircleImage width="15%" src={role.actor.imageUrl} />
      <MovieInfo>
        <Title>{role.actor.name}</Title>
        <SubTitle>{role.roles.join(', ')}</SubTitle>
      </MovieInfo>
    </Inner>
  </StyledLink>
);
