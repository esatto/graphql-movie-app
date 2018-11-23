/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SingleActor
// ====================================================

export interface SingleActor_actor_rolesInMovies_movie {
  __typename: "Movie";
  id: string;
  title: string;
  posterImageUrl: string;
}

export interface SingleActor_actor_rolesInMovies {
  __typename: "ActorRole";
  movie: SingleActor_actor_rolesInMovies_movie;
  roles: string[];
}

export interface SingleActor_actor {
  __typename: "Actor";
  id: string;
  name: string;
  imageUrl: string;
  birthday: string;
  nationality: string;
  shortBio: string;
  rolesInMovies: SingleActor_actor_rolesInMovies[];
}

export interface SingleActor {
  actor: SingleActor_actor | null;
}

export interface SingleActorVariables {
  id: string;
}
