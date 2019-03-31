import { round } from './helpers';

describe('round', () => {
  it('can round to the specified digits', () => {
    const rounded = round(123.456);
    expect(rounded).toEqual(123.46);
  });
});
