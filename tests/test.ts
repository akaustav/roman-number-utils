import { naturalToRoman } from '../src/natural-to-roman.ts';
import { romanToNatural } from '../src/roman-to-natural.ts';

const MIN = 1;
const MAX = 3999;

for (let i = MIN; i <= MAX; ++i) {
  const r = naturalToRoman(i);
  const n = romanToNatural(r);

  if (n != i) {
    console.log(`Error at ${i}. Roman number: '${r}'. Natural number: ${n}`);
  }
}
