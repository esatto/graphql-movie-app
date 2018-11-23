/* tslint:disable */
// This file was automatically generated and should not be edited.

import { ReviewInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: AddReview
// ====================================================

export interface AddReview_addReview_movie_reviews {
  __typename: "Review";
  id: string;
  rating: number;
  reviewer: string;
  title: string;
}

export interface AddReview_addReview_movie {
  __typename: "Movie";
  id: string;
  reviews: AddReview_addReview_movie_reviews[];
}

export interface AddReview_addReview {
  __typename: "Review";
  id: string;
  movie: AddReview_addReview_movie;
}

export interface AddReview {
  addReview: AddReview_addReview;
}

export interface AddReviewVariables {
  review: ReviewInput;
}
