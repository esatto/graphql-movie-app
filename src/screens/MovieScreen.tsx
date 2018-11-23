import { Redirect, RouteComponentProps } from '@reach/router';
import React from 'react';
import styled from 'styled-components';
import { Description } from '../components/common/Description';
import { Header } from '../components/common/Header';
import { H1, H3 } from '../components/common/Heading';
import { LoadingScreen } from '../components/common/LoadingScreen';
import { MetadataItem } from '../components/common/MetadataItem';
import { MetadataWrapper } from '../components/common/MetadataWrapper';
import { Stars } from '../components/common/Stars';
import { Wrapper } from '../components/common/Wrapper';
import { Reviews } from '../components/Reviews';
import { RoleList } from '../components/RoleList';
import { MovieQuery, MOVIE_QUERY } from '../queries/MovieQuery';
import { averageRating } from '../utils/averageRating';
import { minutesToTime } from '../utils/minutesToTime';

const StarsWrapper = styled.div`
  width: 40%;
`;

export interface MovieScreenProps extends RouteComponentProps<{ id: string }> {}

const MovieScreen: React.FC<MovieScreenProps> = props => {
  if (!props.id) return <Redirect to="/" />;

  return (
    <MovieQuery query={MOVIE_QUERY} variables={{ id: props.id }}>
      {({ data, loading, error }) => {
        if (loading) return <LoadingScreen />;
        if (!data || !data.movie) return 'no data';

        const movie = data.movie;

        return (
          <div>
            <Header imageUrl={movie.posterImageUrl}>
              <H1>{movie.title}</H1>
              <StarsWrapper>
                <Stars rating={averageRating(movie.reviews)} color="#fff" />
              </StarsWrapper>
            </Header>

            <MetadataWrapper>
              <MetadataItem
                title="Length"
                content={minutesToTime(movie.runtime)}
              />
              <MetadataItem title="Release" content={movie.releaseDate} />
              <MetadataItem title="Rating" content={movie.rating} />
            </MetadataWrapper>

            <Wrapper>
              <Description>{movie.description}</Description>

              <H3>Cast</H3>

              <RoleList roles={movie.roles} />

              <Reviews movieId={movie.id} reviews={movie.reviews} />
            </Wrapper>
          </div>
        );
      }}
    </MovieQuery>
  );
};

export default MovieScreen;
