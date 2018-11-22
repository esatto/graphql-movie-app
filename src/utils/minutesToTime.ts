export const minutesToTime = (input: number) => {
  if (input < 0) return '';

  const hours = Math.floor(input / 60);
  const minutes = input % 60;

  if (minutes === 0) return `${hours}h`;

  return `${hours}h ${minutes}min`;
};
