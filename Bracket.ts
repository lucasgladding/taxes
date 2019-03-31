import { round } from './helpers';

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

  taxable(income: number): number {
    const capped = income > this.max ? this.max : income;
    const taxable = capped - this.min;
    return taxable > 0 ? taxable : 0;
  }

  calculate(income: number): number {
    const taxable = this.taxable(income);
    return round(taxable * this.rate);
  }
}

export default Bracket;
