import { minutesToTime } from '../minutesToTime';

const cases = [
  ['2h', 120],
  ['3h 30min', 210],
  ['1h 23min', 83],
  ['', -10],
  ['0h', 0]
];

test.each(cases)('Should return %s when converting %s', (expected, minutes) => {
  expect(minutesToTime(minutes)).toBe(expected);
});
