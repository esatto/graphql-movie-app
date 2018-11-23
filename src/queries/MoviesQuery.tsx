import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { AllMovies } from './__generated__/AllMovies';

export const MOVIES_QUERY = gql`
  query AllMovies {
    movies {
      id
      title
      posterImageUrl
      genres
      runtime
      reviews {
        id
        rating
      }
    }
  }
`;

export class MoviesQuery extends Query<AllMovies> {}
