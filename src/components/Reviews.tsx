import React from 'react';
import { H3 } from './common/Heading';
import { ReviewList } from './ReviewList';
import { ReviewModal } from './ReviewModal';

interface Props {
  movieId: string;
  reviews: any[];
}

export const Reviews: React.FC<Props> = ({ movieId, reviews }) => (
  <>
    <H3>Reviews</H3>
    <ReviewList reviews={reviews} />
    <ReviewModal movieId={movieId} />
  </>
);
