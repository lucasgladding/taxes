import Bracket from './Bracket';

describe('Bracket', () => {
  let bracket;
  let min, max, rate;

  beforeEach(() => {
    min = 10000;
    max = 20000;
    rate = 0.2;
    bracket = new Bracket({ min, max, rate });
  });

  it('can calculate the taxable income', () => {
    const income = 15000;
    const taxable = bracket.calculateTaxableIncome(income);
    expect(taxable).toEqual(income - min);
  });

  it('can calculate the taxable income when less than the range', () => {
    const income = 5000;
    const taxable = bracket.calculateTaxableIncome(income);
    expect(taxable).toEqual(0);
  });

  it('can calculate the taxable income when greater than the range', () => {
    const income = 25000;
    const taxable = bracket.calculateTaxableIncome(income);
    expect(taxable).toEqual(max - min);
  });

  it('can calculate the taxes', () => {
    const income = 15000;
    const taxable = bracket.calculateTaxableIncome(income);
    const taxes = bracket.calculateTax(income);
    expect(taxes).toEqual(taxable * rate);
  });
});
