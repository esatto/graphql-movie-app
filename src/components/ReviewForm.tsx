import { Formik } from 'formik';
import React from 'react';
import styled from 'styled-components';
import { Button } from './common/Button';
import { H3 } from './common/Heading';
import { Input } from './common/Input';
import { Label } from './common/Label';
import { StarsInput } from './common/StarsInput';

const ButtonWrapper = styled.div`
  margin-top: 1rem;
`;

const StyledForm = styled.form`
  margin-top: 1rem;
`;

interface Review {
  movieId: string;
  rating: number;
  reviewer: string;
  title: string;
}

interface Props {
  movieId: string;
  onSubmit?: (data: Review) => Promise<any>;
}

export const ReviewForm: React.FC<Props> = ({ movieId, onSubmit }) => (
  <div>
    <H3>Write review</H3>

    <Formik<Review>
      onSubmit={async (data, formik) => {
        if (onSubmit) {
          await onSubmit(data);
        }
        formik.setSubmitting(false);
      }}
      initialValues={{
        movieId,
        rating: 5,
        reviewer: '',
        title: ''
      }}
    >
      {({
        handleSubmit,
        values,
        setFieldValue,
        handleChange,
        isSubmitting
      }) => (
        <StyledForm onSubmit={handleSubmit}>
          <StarsInput
            value={values.rating}
            onChange={val => setFieldValue('rating', val)}
          />
          <Label htmlFor="reviewer">Name</Label>
          <Input
            id="reviewer"
            name="reviewer"
            placeholder="John Doe"
            value={values.reviewer}
            onChange={handleChange}
            disabled={isSubmitting}
          />

          <Label htmlFor="title">Comment</Label>

          <Input
            id="title"
            name="title"
            value={values.title}
            onChange={handleChange}
            placeholder="Optional comment"
            disabled={isSubmitting}
          />

          <ButtonWrapper>
            <Button type="submit" disabled={isSubmitting}>
              Submit review
            </Button>
          </ButtonWrapper>
        </StyledForm>
      )}
    </Formik>
  </div>
  // );
  //   }}
  // </AddReviewMutation>
);
