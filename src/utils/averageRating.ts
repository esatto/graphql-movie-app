export const averageRating = (input: Array<{ rating: number }>) => {
  const ratings = input.reduce((acc, val) => acc + val.rating, 0);

  return ratings / input.length || 0;
};
