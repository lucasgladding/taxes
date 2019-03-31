import Taxes from './Taxes';

describe('Taxes', () => {
  let brackets;

  it('can combine taxes from the brackets', () => {
    const brackets = [
      createBracketWithTaxes(2000),
      createBracketWithTaxes(3000),
    ];
    const instance = new Taxes({ brackets });
    const taxes = instance.calculate(20000);
    expect(taxes).toEqual(5000);
  });
});

function createBracketWithTaxes(taxes) {
  return {
    taxable: () => 0,
    calculate: () => taxes,
  };
}
