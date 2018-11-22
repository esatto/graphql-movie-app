# Apollo GraphQL Movie App

Example React app with Apollo/GraphQL created for a presentation at the meetup [React & GraphQL Sundsvall](https://www.meetup.com/React-GraphQL-Sundsvall/).

You can find the API used in this app in the repo [esatto/graphql-movie-api](https://github.com/esatto/graphql-movie-api).

DEMO - Coming soon

## Technology used

- [React.js](https://reactjs.org/) - UI
- [Create React App](https://github.com/facebook/create-react-app) - Create React apps with no build configuration
- [Apollo Client](https://www.apollographql.com/docs/react/) - GraphQL client, fetch/update data via GraphQL
- [TypeScript](https://www.typescriptlang.org/) - Static types
- [Apollo CLI](https://github.com/apollographql/apollo-tooling) - Used for generating types for GraphQL queries and mutations

## Getting started

We're using `yarn` in these examples, but `npm` should work as well.

1. Run `yarn` to install packages
2. Run `yarn start` to start the app in development mode.
3. Run `yarn graphql` to generate TypeScript definitions for all queries when added/updated.

## Recommended plugins for VS Code

For syntax highlighting and autocomplete, use the [Apollo VSCode](https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo) plugin.

The project is configured with the apollo.config.js. You need to run the API locally for this to work.

## Structure of the project

This project was partially coded during a live code session, and is not completely made for production use.

The common directory was created mostly to clean up components that wasn't necessary to show during the live coding.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Learn More

- [GraphQL documentation](https://graphql.org/learn).
- [React documentation](https://reactjs.org/).
- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## License

This example project is [MIT licensed](./LICENSE).
