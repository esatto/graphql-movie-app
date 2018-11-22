import React from 'react';
import styled from 'styled-components';
import { MovieListItem } from './MovieListItem';

const RoleWrapper = styled.div`
  margin-top: -1.5rem;
`;

interface Role {
  movie: { id: string; title: string; posterImageUrl: string };
  roles: string[];
}

interface Props {
  roles: Role[];
}

export const ActorMovieList: React.FC<Props> = ({ roles }) => (
  <RoleWrapper>
    {roles.map(role => (
      <div key={role.movie.id}>
        <MovieListItem {...role.movie} subTitle={role.roles.join(', ')} />
      </div>
    ))}
  </RoleWrapper>
);
