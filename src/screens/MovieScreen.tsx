import { Redirect, RouteComponentProps } from '@reach/router';
import React from 'react';
import styled from 'styled-components';
import { Description } from '../components/common/Description';
import { Header } from '../components/common/Header';
import { H1, H3 } from '../components/common/Heading';
import { MetadataItem } from '../components/common/MetadataItem';
import { MetadataWrapper } from '../components/common/MetadataWrapper';
import { Stars } from '../components/common/Stars';
import { Wrapper } from '../components/common/Wrapper';
import { Reviews } from '../components/Reviews';
import { RoleList } from '../components/RoleList';
import { minutesToTime } from '../utils/minutesToTime';

const StarsWrapper = styled.div`
  width: 40%;
`;

export interface MovieScreenProps extends RouteComponentProps<{ id: string }> {}

const MovieScreen: React.FC<MovieScreenProps> = props => {
  if (!props.id) return <Redirect to="/" />;

  return (
    <div>
      <Header imageUrl="https://image.tmdb.org/t/p/w1280/D6e8RJf2qUstnfkTslTXNTUAlT.jpg">
        <H1>Ant Man</H1>
        <StarsWrapper>
          <Stars rating={8} color="#fff" />
        </StarsWrapper>
      </Header>

      <MetadataWrapper>
        <MetadataItem title="Length" content={minutesToTime(150)} />
        <MetadataItem title="Release" content="1970-01-01" />
        <MetadataItem title="Rating" content="PG-13" />
      </MetadataWrapper>

      <Wrapper>
        <Description>This is my movie description</Description>

        <H3>Cast</H3>

        <RoleList />

        <Reviews movieId="tt0478970" reviews={[]} />
      </Wrapper>
    </div>
  );
};

export default MovieScreen;
