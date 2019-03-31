interface BracketOptions {
  min: number;
  max: number;
  rate: number;
}

class Bracket {
  min: number;
  max: number;
  rate: number;

  constructor(options: BracketOptions) {
    this.min = options.min;
    this.max = options.max;
    this.rate = options.rate;
  }

  calculateTaxableIncome(income: number): number {
    const capped = income > this.max ? this.max : income;
    const taxable = capped - this.min;
    return taxable > 0 ? taxable : 0;
  }

  calculateTax(income: number): number {
    const taxable = this.calculateTaxableIncome(income);
    return digits(taxable * this.rate);
  }
}

function digits(value: number, digits: number = 2) {
  return Math.round(value * 100) / 100;
}

export default Bracket;
