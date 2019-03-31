import { calculateTax } from './helpers';

describe('calculateTax', () => {
  it('calculates taxes on $80,000', () => {
    const taxes = calculateTax(80000);
    expect(taxes).toEqual(13780.35);
  });
});
