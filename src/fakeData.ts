const fakeMovie = {
  genres: ['Adventure', 'Action'],
  id: '123',
  posterImageUrl:
    'https://image.tmdb.org/t/p/w1280/D6e8RJf2qUstnfkTslTXNTUAlT.jpg',
  reviews: [],
  runtime: 123,
  title: 'Ant Man'
};

export const fakeMovies = [...Array(5)].map((_, i) => ({
  ...fakeMovie,
  id: fakeMovie.id + i
}));

export const fakeStarring = [
  {
    movie: {
      id: '1',
      title: 'Ant Man',
      posterImageUrl:
        'https://image.tmdb.org/t/p/w1280/D6e8RJf2qUstnfkTslTXNTUAlT.jpg'
    },
    roles: ['Scott Lang', 'Ant Man']
  }
];
