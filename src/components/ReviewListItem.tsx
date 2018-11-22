import React from 'react';
import styled from 'styled-components';
import { Stars } from './common/Stars';
import { SubTitle } from './common/SubTitle';

interface Props {
  review: {
    title: string;
    reviewer: string;
    rating: number;
  };
}

const Wrapper = styled.div`
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 1rem;
  text-decoration: none;
  color: #000;
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
`;

const StarsWrapper = styled.div`
  width: 25%;
`;

export const ReviewListItem: React.FC<Props> = ({ review }) => (
  <Wrapper>
    <Title>{review.title}</Title>
    <Footer>
      <SubTitle style={{ flex: 1 }}>{review.reviewer}</SubTitle>
      <StarsWrapper>
        <Stars rating={review.rating} />
      </StarsWrapper>
    </Footer>
  </Wrapper>
);
