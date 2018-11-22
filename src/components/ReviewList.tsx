import React from 'react';
import { ReviewListItem } from './ReviewListItem';

interface Props {
  reviews: any[];
}

export const ReviewList: React.FC<Props> = ({ reviews }) => (
  <div>
    {reviews.length === 0 ? <p>No reviews. Will you be the first?</p> : null}
    {reviews.map(review => (
      <ReviewListItem key={review.id} review={review} />
    ))}
  </div>
);
