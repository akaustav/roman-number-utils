import { romanToNatural } from 'https://deno.land/x/roman_numeral_utils@0.1.0/mod.ts';

const roman = 'MMXX';
const natural = romanToNatural(roman);

console.log(natural); // expected output: 2020
