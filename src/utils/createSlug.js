// here you can read more about it - https://www.npmjs.com/package/slugify
import slugify from 'slugify';

export const createSlug = (slug) =>
  slugify(slug, {
    replacement: '-',
    remove: /[$*_+~.()'"!\-:@]/g,
    lower: true,
  });
