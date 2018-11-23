import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { AddReview, AddReviewVariables } from './__generated__/AddReview';

export const ADD_REVIEW_MUTATION = gql`
  mutation AddReview($review: ReviewInput!) {
    addReview(review: $review) {
      id
      movie {
        id
        reviews {
          id
          rating
          reviewer
          title
        }
      }
    }
  }
`;

export class AddReviewMutation extends Mutation<
  AddReview,
  AddReviewVariables
> {}
