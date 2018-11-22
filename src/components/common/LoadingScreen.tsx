import React from 'react';
import { Header } from './Header';
import { H1 } from './Heading';

export const LoadingScreen: React.FC = () => (
  <Header imageUrl="">
    <H1>Loading...</H1>
  </Header>
);
