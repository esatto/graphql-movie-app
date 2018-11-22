/*

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

*/

/*






















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

*/

/*























const ACTOR_QUERY = gql`
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

*/

/*






















const ADD_REVIEW_MUTATION = gql`
  mutation AddReview($review: ReviewInput!) {
    addReview(review: $review) {
      id
    }
  }
`;

*/

export {};
