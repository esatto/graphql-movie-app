import { Redirect, RouteComponentProps } from '@reach/router';
import React from 'react';
import { ActorMovieList } from '../components/ActorMovieList';
import { Description } from '../components/common/Description';
import { Header } from '../components/common/Header';
import { H1, H3 } from '../components/common/Heading';
import { LoadingScreen } from '../components/common/LoadingScreen';
import { MetadataItem } from '../components/common/MetadataItem';
import { MetadataWrapper } from '../components/common/MetadataWrapper';
import { Wrapper } from '../components/common/Wrapper';
import { ActorQuery, ACTOR_QUERY } from '../queries/ActorQuery';

export interface ActorScreenProps extends RouteComponentProps<{ id: string }> {}

const ActorScreen: React.FC<ActorScreenProps> = props => {
  if (!props.id) return <Redirect to="/" />;

  return (
    <ActorQuery query={ACTOR_QUERY} variables={{ id: props.id }}>
      {({ data, loading }) => {
        if (loading) return <LoadingScreen />;
        if (!data || !data.actor) return 'No data';

        const actor = data.actor;

        return (
          <div>
            <Header imageUrl={actor.imageUrl}>
              <H1>{actor.name}</H1>
            </Header>
            <MetadataWrapper>
              <MetadataItem title="Birthday" content={actor.birthday} />
              <MetadataItem title="Born in" content={actor.nationality} />
            </MetadataWrapper>
            <Wrapper>
              <Description>{actor.shortBio}</Description>

              <H3>Stars in movies</H3>
            </Wrapper>

            <ActorMovieList roles={data.actor.rolesInMovies} />
          </div>
        );
      }}
    </ActorQuery>
  );
};

export default ActorScreen;
