import { Link } from '@reach/router';
import React from 'react';
import styled from 'styled-components';
import { averageRating } from '../utils/averageRating';
import { minutesToTime } from '../utils/minutesToTime';
import { Poster } from './common/Poster';
import { Stars } from './common/Stars';
import { SubTitle } from './common/SubTitle';

const StyledLink = styled(Link)`
  display: block;
  padding: 1rem 2rem;
  text-decoration: none;

  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const MovieInfo = styled.div`
  flex: 1;
  margin-left: 2rem;
  margin-top: 1rem;
`;

const Title = styled.h2`
  text-decoration: none;
  color: #000;
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

const Inner = styled.div`
  display: flex;
`;

const StarsWrapper = styled.div`
  width: 60%;
`;

interface Props {
  id: string;
  title: string;
  posterImageUrl: string;
  reviews?: any[];
  genres?: string[];
  runtime?: number;
  subTitle?: string;
}

export const MovieListItem: React.FC<Props> = ({
  id,
  posterImageUrl,
  title,
  reviews,
  genres,
  runtime,
  subTitle
}) => (
  <StyledLink to={`/movie/${id}`}>
    <Inner>
      <Poster width="30%" src={posterImageUrl} />
      <MovieInfo>
        <Title>{title}</Title>
        {reviews ? (
          <StarsWrapper>
            <Stars rating={averageRating(reviews)} />
          </StarsWrapper>
        ) : null}
        {genres ? <SubTitle>{genres.slice(0, 2).join(', ')}</SubTitle> : null}
        {runtime ? <SubTitle>{minutesToTime(runtime)}</SubTitle> : null}
        {subTitle ? <SubTitle>{subTitle}</SubTitle> : null}
      </MovieInfo>
    </Inner>
  </StyledLink>
);
