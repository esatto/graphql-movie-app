import React from 'react';
import { MovieList } from '../MovieList';

const fakeMovies = [...Array(5)].map((_, index) => ({
  __typename: 'Movie',
  genres: [' '],
  rating: '',
  id: '123' + index,
  posterImageUrl: '',
  reviews: [],
  runtime: 0,
  title: ' '
})) as any;

export const LoadingListScreen: React.FC = () => (
  <MovieList movies={fakeMovies} />
);
