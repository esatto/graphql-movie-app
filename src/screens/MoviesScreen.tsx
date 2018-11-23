import { RouteComponentProps } from '@reach/router';
import React from 'react';
import { LoadingListScreen } from '../components/common/LoadingListScreen';
import { MovieList } from '../components/MovieList';
import { MoviesQuery, MOVIES_QUERY } from '../queries/MoviesQuery';

export interface MoviesScreenProps extends RouteComponentProps {}

const MoviesScreen: React.FC<MoviesScreenProps> = () => (
  <div>
    <h1>Movies</h1>

    <MoviesQuery query={MOVIES_QUERY}>
      {({ data, loading }) => {
        if (loading) return <LoadingListScreen />;
        if (!data) return 'No data';

        return <MovieList movies={data.movies} />;
      }}
    </MoviesQuery>
  </div>
);

export default MoviesScreen;
