import React from 'react';
import { SingleMovie_movie_roles } from '../queries/__generated__/SingleMovie';
import { RoleListItem } from './RoleListItem';

interface Props {
  roles: SingleMovie_movie_roles[];
}

export const RoleList: React.FC<Props> = ({ roles }) => (
  <div>
    {roles.map(role => (
      <RoleListItem key={role.actor.id} role={role} />
    ))}
  </div>
);
