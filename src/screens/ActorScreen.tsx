import { Redirect, RouteComponentProps } from '@reach/router';
import React from 'react';
import { ActorMovieList } from '../components/ActorMovieList';
import { Description } from '../components/common/Description';
import { Header } from '../components/common/Header';
import { H1, H3 } from '../components/common/Heading';
import { MetadataItem } from '../components/common/MetadataItem';
import { MetadataWrapper } from '../components/common/MetadataWrapper';
import { Wrapper } from '../components/common/Wrapper';
import { fakeStarring } from '../fakeData';

export interface ActorScreenProps extends RouteComponentProps<{ id: string }> {}

const ActorScreen: React.FC<ActorScreenProps> = props => {
  if (!props.id) return <Redirect to="/" />;

  return (
    <div>
      <Header imageUrl="https://m.media-amazon.com/images/M/MV5BMTY4NTEwNDg1MV5BMl5BanBnXkFtZTgwODMwMDA0ODE@._V1_SY1000_CR0,0,799,1000_AL_.jpg">
        <H1>Paul Rudd</H1>
      </Header>
      <MetadataWrapper>
        <MetadataItem title="Birthday" content="1970-01-01" />
        <MetadataItem title="Born in" content="USA" />
      </MetadataWrapper>
      <Wrapper>
        <Description>Good actor? Bad actor? Who knows.</Description>

        <H3>Stars in movies</H3>
      </Wrapper>

      <ActorMovieList roles={fakeStarring} />
    </div>
  );
};

export default ActorScreen;
