import { createSlug } from '../../src/utils/createSlug';

test('create a slug', () => {
  expect(createSlug('Hello World!!')).toBe('hello-world');
});
