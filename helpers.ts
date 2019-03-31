import Bracket from './Bracket';
import Taxes from './Taxes';

export function calculateTax(income: number): number {
  const brackets: Bracket[] = [
    new Bracket({ min: 0, max: 47630, rate: 0.15 }),
    new Bracket({ min: 47630, max: 95259, rate: 0.205 }),
    new Bracket({ min: 95259, max: 147667, rate: 0.26 }),
    new Bracket({ min: 147667, max: 210371, rate: 0.29 }),
    new Bracket({ min: 210371, max: Infinity, rate: 0.33 }),
  ];
  const taxes = new Taxes({ brackets });
  return taxes.calculate(income);
}
