import { Location, Router } from '@reach/router';
import React from 'react';
import styled from 'styled-components';
import { ScrollOnPathChange } from './components/common/ScrollToTopOnRouterChange';
import ActorScreen from './screens/ActorScreen';
import MovieScreen from './screens/MovieScreen';
import MoviesScreen from './screens/MoviesScreen';

const AppWrapper = styled.div`
  margin: 0 auto;
  max-width: 30rem;
`;

const App: React.FC = () => (
  <AppWrapper>
    <Router>
      <MoviesScreen path="/" />
      <ActorScreen path="/actor/:id" />
      <MovieScreen path="/movie/:id" />
    </Router>
    <Location>
      {({ location }) => <ScrollOnPathChange path={location.pathname} />}
    </Location>
  </AppWrapper>
);

export default App;
