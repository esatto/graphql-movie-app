import React from 'react';
import { MovieListItem } from './MovieListItem';

interface Movie {
  id: string;
  genres: string[];
  posterImageUrl: string;
  reviews: any[];
  runtime: number;
  title: string;
}

interface Props {
  movies: Movie[];
}

export const MovieList: React.FC<Props> = ({ movies }) => (
  <div>
    {movies.map(movie => (
      <MovieListItem key={movie.id} {...movie} />
    ))}
  </div>
);
