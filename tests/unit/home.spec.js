import Home from '@/views/Home.vue';

describe('Home.vue', () => {
  it('has data', () => {
    expect(typeof Home.data).toBe('function');
  });
});
