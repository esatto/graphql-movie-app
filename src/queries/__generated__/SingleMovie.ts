/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SingleMovie
// ====================================================

export interface SingleMovie_movie_roles_actor {
  __typename: "Actor";
  id: string;
  name: string;
  imageUrl: string;
}

export interface SingleMovie_movie_roles {
  __typename: "MovieRole";
  actor: SingleMovie_movie_roles_actor;
  roles: string[];
}

export interface SingleMovie_movie_reviews {
  __typename: "Review";
  id: string;
  title: string;
  rating: number;
  reviewer: string;
}

export interface SingleMovie_movie {
  __typename: "Movie";
  id: string;
  title: string;
  description: string;
  posterImageUrl: string;
  releaseDate: string;
  /**
   * Age rating of the movie
   */
  rating: string;
  /**
   * Runtime in minutes
   */
  runtime: number;
  roles: SingleMovie_movie_roles[];
  reviews: SingleMovie_movie_reviews[];
}

export interface SingleMovie {
  movie: SingleMovie_movie | null;
}

export interface SingleMovieVariables {
  id: string;
}
