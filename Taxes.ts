import Bracket from './Bracket';

interface TaxesOptions {
  brackets: Bracket[];
}

class Taxes {
  brackets: Bracket[];

  constructor(options: TaxesOptions) {
    this.brackets = options.brackets;
  }

  calculate(income: number): number {
    return this.brackets.reduce((taxes: number, bracket: Bracket) => {
      return taxes + bracket.calculateTax(income);
    }, 0);
  }
}

export default Taxes;
