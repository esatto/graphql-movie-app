import React from 'react';
import { RoleListItem } from './RoleListItem';

interface Props {}

const fakeRoles = [1, 2, 3];

export const RoleList: React.FC<Props> = () => (
  <div>
    {fakeRoles.map(role => (
      <RoleListItem
        key={role}
        role={{
          actor: {
            id: '123' + role,
            name: 'Paul Rudd',
            imageUrl:
              'https://m.media-amazon.com/images/M/MV5BMTY4NTEwNDg1MV5BMl5BanBnXkFtZTgwODMwMDA0ODE@._V1_SY1000_CR0,0,799,1000_AL_.jpg'
          },
          roles: ['Scott Lang', 'Ant Man']
        }}
      />
    ))}
  </div>
);
