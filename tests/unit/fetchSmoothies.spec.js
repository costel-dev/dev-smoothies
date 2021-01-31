import { fetchSmoothies } from '../../src/utils/fetchSmoothies';

test('the data should be an array', () => {
  expect.assertions(1);
  expect(fetchSmoothies()).toEqual([]);
});
