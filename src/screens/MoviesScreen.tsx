import { RouteComponentProps } from '@reach/router';
import React from 'react';
import { MovieList } from '../components/MovieList';
import { fakeMovies } from '../fakeData';

export interface MoviesScreenProps extends RouteComponentProps {}

const MoviesScreen: React.FC<MoviesScreenProps> = () => (
  <div>
    <h1>Movies</h1>

    <MovieList movies={fakeMovies} />
  </div>
);

export default MoviesScreen;
