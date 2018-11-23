import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { SingleActor, SingleActorVariables } from './__generated__/SingleActor';

export const ACTOR_QUERY = gql`
  query SingleActor($id: ID!) {
    actor(id: $id) {
      id
      name
      imageUrl
      birthday
      nationality
      shortBio
      rolesInMovies {
        movie {
          id
          title
          posterImageUrl
        }
        roles
      }
    }
  }
`;

export class ActorQuery extends Query<SingleActor, SingleActorVariables> {}
