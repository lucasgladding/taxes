import { calculateTax } from '.';

describe('calculateTax', () => {
  it('calculates taxes on $80,000', () => {
    const taxes = calculateTax(80000);
    expect(taxes).toEqual(13780.35);
  });

  it('calculates taxes on $150,000', () => {
    const taxes = calculateTax(150000);
    expect(taxes).toEqual(31211.10);
  });
});
