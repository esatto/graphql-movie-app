/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllMovies
// ====================================================

export interface AllMovies_movies_reviews {
  __typename: "Review";
  id: string;
  rating: number;
}

export interface AllMovies_movies {
  __typename: "Movie";
  id: string;
  title: string;
  posterImageUrl: string;
  genres: string[];
  /**
   * Runtime in minutes
   */
  runtime: number;
  reviews: AllMovies_movies_reviews[];
}

export interface AllMovies {
  movies: AllMovies_movies[];
}
