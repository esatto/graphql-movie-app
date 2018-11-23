import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { SingleMovie, SingleMovieVariables } from './__generated__/SingleMovie';

export const MOVIE_QUERY = gql`
  query SingleMovie($id: ID!) {
    movie(id: $id) {
      id
      title
      description
      posterImageUrl
      releaseDate
      rating
      runtime
      roles {
        actor {
          id
          name
          imageUrl
        }
        roles
      }
      reviews {
        id
        title
        rating
        reviewer
      }
    }
  }
`;

export class MovieQuery extends Query<SingleMovie, SingleMovieVariables> {}
